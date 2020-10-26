# -*- coding: utf-8 -*-

'''
脚本Debug模式执行处理任务
主要用于脚本预检查、DataFlux.f(x)编辑页面直接调用函数
'''

# Builtin Modules
import time
import traceback
import pprint

# 3rd-party Modules
from celery.exceptions import SoftTimeLimitExceeded
import six

# Project Modules
from worker import app
from worker.utils import toolkit, yaml_resources
from worker.tasks import gen_task_id, webhook

# Current Module
from worker.tasks import BaseTask
from worker.tasks.dataflux_func import DataFluxFuncBaseException, NotFoundException, NotFoundException
from worker.tasks.dataflux_func import ScriptBaseTask

CONFIG = yaml_resources.get('CONFIG')

class DataFluxFuncDebugger(ScriptBaseTask):
    def get_script_dict_for_debugger(self, script_id):
        user_scripts = []

        # 获取当前脚本草稿
        sql = '''
            SELECT
                 `scpt`.`seq`
                ,`scpt`.`id`
                ,`scpt`.`publishVersion`
                ,`scpt`.`codeDraft`    AS `code`
                ,`scpt`.`codeDraftMD5` AS `codeMD5`

                ,`sset`.`id` AS `scriptSetId`

            FROM biz_main_script_set AS sset

            JOIN biz_main_script AS scpt
                ON `sset`.`id` = `scpt`.`scriptSetId`

            WHERE
                `scpt`.`id` = ?

            LIMIT 1
            '''
        sql_params = [script_id]
        db_res = self.db.query(sql, sql_params)
        user_scripts += db_res

        # 获取其他脚本代码
        sql = '''
            SELECT
                 `scpt`.`id`
                ,`scpt`.`publishVersion`
                ,`scpt`.`code`
                ,`scpt`.`codeMD5`

                ,`sset`.`id` AS `scriptSetId`

            FROM biz_main_script_set AS sset

            JOIN biz_main_script AS scpt
                ON `sset`.`id` = `scpt`.`scriptSetId`

            WHERE
                `scpt`.`id` != ?
            '''
        sql_params = [script_id]
        db_res = self.db.query(sql, sql_params)
        user_scripts += db_res

        script_dict = self.create_script_dict(user_scripts)

        return script_dict

@app.task(name='DataFluxFunc.debugger', bind=True, base=DataFluxFuncDebugger,
    soft_time_limit=CONFIG['_FUNC_TASK_DEBUG_TIMEOUT'],
    time_limit=CONFIG['_FUNC_TASK_DEBUG_TIMEOUT'] + CONFIG['_FUNC_TASK_EXTRA_TIMEOUT_TO_KILL'])
def dataflux_func_debugger(self, *args, **kwargs):
    # 执行函数、参数
    func_id          = kwargs.get('funcId')
    func_call_kwargs = kwargs.get('funcCallKwargs') or {}

    script_set_id = func_id.split('__')[0]
    script_id     = func_id.split('.')[0]
    func_name     = func_id[len(script_id) + 1:]

    self.logger.info('DataFluxFunc Debugger Task launched: `{}`'.format(func_id))

    # 来源
    origin    = kwargs.get('origin')
    origin_id = kwargs.get('originId')

    # 顶层任务ID
    root_task_id = kwargs.get('rootTaskId') or self.request.id

    # 函数链
    func_chain = kwargs.get('funcChain') or []
    func_chain.append(func_id)

    # 执行模式：UI执行只能使用同步模式
    exec_mode = 'sync'

    # 启动时间
    start_time    = int(time.time())
    start_time_ms = int(time.time() * 1000)

    # 函数结果、上下文、跟踪信息、错误堆栈
    func_result  = None
    script_scope = None
    trace_info   = None
    error_stack  = None

    try:
        # 获取代码对象
        script_dict = self.get_script_dict_for_debugger(script_id)
        target_script = script_dict.get(script_id)

        if not target_script:
            e = NotFoundException('Script `{}` not found'.format(script_id))
            raise e

        extra_vars = {
            '_DFF_DEBUG'        : True,
            '_DFF_ROOT_TASK_ID' : root_task_id,
            '_DFF_SCRIPT_SET_ID': script_set_id,
            '_DFF_SCRIPT_ID'    : script_id,
            '_DFF_FUNC_ID'      : func_id,
            '_DFF_FUNC_NAME'    : func_name,
            '_DFF_FUNC_CHAIN'   : func_chain,
            '_DFF_ORIGIN'       : origin,
            '_DFF_ORIGIN_ID'    : origin_id,
            '_DFF_EXEC_MODE'    : exec_mode,
            '_DFF_START_TIME'   : start_time,
            '_DFF_START_TIME_MS': start_time_ms,
            '_DFF_TRIGGER_TIME' : kwargs.get('triggerTime') or start_time,
            '_DFF_CRONTAB'      : kwargs.get('crontab'),
            '_DFF_QUEUE'        : kwargs.get('queue'),
        }
        self.logger.info('[CREATE SAFE SCOPE] `{}`'.format(script_id))
        script_scope = self.create_safe_scope(
                script_name=script_id,
                script_dict=script_dict,
                extra_vars=extra_vars)

        # 加载代码
        self.logger.info('[LOAD SCRIPT] `{}`'.format(script_id))
        script_scope = self.safe_exec(target_script['codeObj'], globals=script_scope)

        # 执行脚本
        if func_name:
            entry_func = script_scope.get(func_name)
            if not entry_func:
                e = NotFoundException('Function `{}` not found in `{}`'.format(func_name, script_id))
                raise e

            # 执行函数
            self.logger.info('[RUN FUNC] `{}`'.format(func_id))
            func_result = entry_func(**func_call_kwargs)

    # except SoftTimeLimitExceeded as e:
    except Exception as e:
        for line in traceback.format_exc().splitlines():
            self.logger.error(line)

        trace_info = self.get_trace_info()
        error_stack = self.get_formated_einfo(trace_info, only_in_script=True)

        # 预检查任务需要将检查结果和错误同时返回给调用方，因此本身永远不会失败
        # API端需要判断预检查是否通过，并将错误重新包装后返回给调用放

    finally:
        result = {}

        if script_scope:
            # 脚本解析结果
            exported_api_func = script_scope['DFF'].exported_api_funcs or []
            result['exportedAPIFuncs'] = exported_api_func

            # 脚本输出日志
            log_messages = script_scope['DFF'].log_messages or []
            result['logMessages'] = log_messages

            # 脚本输出图标
            plot_charts = script_scope['DFF'].plot_charts or []
            result['plotCharts'] = plot_charts

        if func_name:
            # 函数运行结果
            func_result_raw        = None
            func_result_repr       = None
            func_result_json_dumps = None

            try:
                func_result_raw = toolkit.json_safe_copy(func_result)
            except Exception as e:
                for line in traceback.format_exc().splitlines():
                    self.logger.error(line)

            try:
                func_result_repr = pprint.saferepr(func_result)
            except Exception as e:
                for line in traceback.format_exc().splitlines():
                    self.logger.error(line)

            try:
                func_result_json_dumps = toolkit.json_safe_dumps(func_result)
            except Exception as e:
                for line in traceback.format_exc().splitlines():
                    self.logger.error(line)

            result['funcResult'] = {
                'raw'      : func_result_raw,
                'repr'     : func_result_repr,
                'jsonDumps': func_result_json_dumps,
                'cost'     : time.time() - start_time,
            }

        # 返回值
        retval = {
            'result'   : result,
            'traceInfo': trace_info,
            'stack'    : error_stack,
        }

        # 清理资源
        self.clean_up()

        return retval

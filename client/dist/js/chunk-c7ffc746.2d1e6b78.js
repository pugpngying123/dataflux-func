(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7ffc746"],{"70a3":function(e,t,r){"use strict";var a=r("d0fc"),n=r.n(a);t["default"]=n.a},d0fc:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Add Script Set":"添加脚本集","Setup Script Set":"配置脚本集","Title":"标题","Description":"描述","Requirements":"依赖包","Script Set ID will be a part of the Func ID":"脚本集ID将作为函数ID的一部分","requirements.txt format, one for each line":"requirements.txt 文件格式，一行一个","Go to PIP tool to install":"前往PIP工具安装","Please input ID":"请输入ID","Only alphabets, numbers and underscore are allowed":"只能包含大小写英文、数字及下划线","Cannot not starts with a number":"不得以数字开头","ID cannot contains double underscore \\"__\\"":"脚本集ID不能包含\\"__\\"，\\"__\\"为脚本集ID与脚本ID的分隔标志","Script Set created":"脚本集已创建","Script Set saved":"脚本集已保存","Script Set locked":"脚本集已上锁","Script Set unlocked":"脚本集已解锁","Script Set deleted":"脚本集已删除","Script Set cloned":"脚本集已克隆","Are you sure you want to delete the Script Set?":"是否确认删除此脚本集？","This Script Set is locked by someone else, setup is disabled":"当前脚本已被其他人锁定，无法更改配置","This Script Set is locked by you, setup is disabled to others":"当前脚本已被您锁定，其他人无法更改配置","Please input new Script Set ID":"请输入新脚本集ID","Inputed Script Set ID already exists":"输入的脚本集ID已经存在"}}'),delete e.options._Ctor}},e145:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[e.$store.state.isLoaded?r("el-container",{attrs:{direction:"vertical"}},[r("el-header",{attrs:{height:"60px"}},[r("h1",[e._v(e._s(e.pageTitle)+" "),r("code",{staticClass:"text-main"},[e._v(e._s(e.data.title||e.data.id))])])]),e._v(" "),r("el-main",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:15}},[r("div",{staticClass:"common-form"},[r("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,disabled:e.isLockedByOther,rules:e.formRules}},[e.isLockedByOther?r("el-form-item",[r("InfoBlock",{attrs:{type:"error",title:e.$t("This Script Set is locked by someone else, setup is disabled")}})],1):e.data.isLocked?r("el-form-item",[r("InfoBlock",{attrs:{type:"success",title:e.$t("This Script Set is locked by you, setup is disabled to others")}})],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"ID",prop:"id"}},[r("el-input",{attrs:{disabled:"setup"===e.T.pageMode(),maxlength:"40","show-word-limit":""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),e._v(" "),r("InfoBlock",{attrs:{title:e.$t("Script Set ID will be a part of the Func ID")}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("Title")}},[r("el-input",{attrs:{placeholder:e.$t("Optional"),maxlength:"25","show-word-limit":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("Description")}},[r("el-input",{attrs:{placeholder:e.$t("Optional"),type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000","show-word-limit":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("Requirements")}},[r("el-input",{attrs:{placeholder:e.$t("Optional"),type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000","show-word-limit":""},model:{value:e.form.requirements,callback:function(t){e.$set(e.form,"requirements",t)},expression:"form.requirements"}}),e._v(" "),r("InfoBlock",{attrs:{title:e.$t("requirements.txt format, one for each line")}}),e._v(" "),r("div",{staticClass:"setup-right"},[e.requirementsTEXT?r("el-button",{attrs:{type:"text"},on:{click:e.goToPIPTool}},[e._v(e._s(e.$t("Go to PIP tool to install")))]):e._e()],1)],1),e._v(" "),r("el-form-item",["setup"===e.T.pageMode()?r("el-button",{on:{click:e.deleteData}},[e._v(e._s(e.$t("Delete")))]):e._e(),e._v(" "),r("div",{staticClass:"setup-right"},["setup"===e.T.pageMode()?[r("el-button",{on:{click:function(t){return e.lockData(!e.data.isLocked)}}},[e._v(e._s(e.data.isLocked?e.$t("Unlock"):e.$t("Lock")))]),e._v(" "),r("el-button",{on:{click:e.cloneData}},[e._v(e._s(e.$t("Clone")))])]:e._e(),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Save")))])],2)],1)],1)],1)]),e._v(" "),r("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1):e._e()],1)},n=[],s=r("1da1"),i=(r("159b"),r("b64b"),r("a15b"),r("ac1f"),r("1276"),r("96cf"),{name:"ScriptSetSetup",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.loadData();case 2:e.t0=r.T.pageMode(),e.next="add"===e.t0?5:"setup"===e.t0?8:9;break;case 5:return r.T.jsonClear(r.form),r.data={},e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("setup"!==e.T.pageMode()){t.next=10;break}return t.next=3,e.T.callAPI_getOne("/api/v1/script-sets/do/list",e.scriptSetId);case 3:if(r=t.sent,r.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=r.data,a={},Object.keys(e.form).forEach((function(t){return a[t]=e.data[t]})),e.form=a;case 10:e.$store.commit("updateLoadStatus",!0);case 11:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:r=null,t.t1=e.T.pageMode(),t.next="add"===t.t1?12:"setup"===t.t1?16:20;break;case 12:return t.next=14,e.addData();case 14:return r=t.sent,t.abrupt("break",20);case 16:return t.next=18,e.modifyData();case 18:return r=t.sent,t.abrupt("break",20);case 20:r&&(e.$store.commit("updateAsideScript_currentNodeKey",r),e.$store.commit("updateEditor_highlightedFuncId",null));case 21:case"end":return t.stop()}}),t,null,[[0,5]])})))()},addData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.callAPI("post","/api/v1/script-sets/do/add",{body:{data:e.T.jsonCopy(e.form)},alert:{okMessage:e.$t("Script Set created")}});case 2:if(r=t.sent,r.ok){t.next=5;break}return t.abrupt("return");case 5:return e.$router.push({name:"intro"}),e.$store.commit("updateScriptListSyncTime"),t.abrupt("return",r.data.id);case 8:case"end":return t.stop()}}),t)})))()},modifyData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.T.jsonCopy(e.form),delete r.id,t.next=4,e.T.callAPI("post","/api/v1/script-sets/:id/do/modify",{params:{id:e.scriptSetId},body:{data:r},alert:{okMessage:e.$t("Script Set saved")}});case 4:if(a=t.sent,a.ok){t.next=7;break}return t.abrupt("return");case 7:return e.$store.commit("updateScriptListSyncTime"),t.abrupt("return",e.scriptSetId);case 9:case"end":return t.stop()}}),t)})))()},lockData:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e?t.$t("Script Set locked"):t.$t("Script Set unlocked"),r.next=3,t.T.callAPI("post","/api/v1/script-sets/:id/do/modify",{params:{id:t.scriptSetId},body:{data:{isLocked:e}},alert:{okMessage:a}});case 3:if(n=r.sent,n.ok){r.next=6;break}return r.abrupt("return");case 6:return r.next=8,t.loadData();case 8:t.$store.commit("updateScriptListSyncTime");case 9:case"end":return r.stop()}}),r)})))()},deleteData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.confirm(e.$t("Are you sure you want to delete the Script Set?"));case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.T.callAPI("/api/v1/script-sets/:id/do/delete",{params:{id:e.scriptSetId},alert:{okMessage:e.$t("Script Set deleted")}});case 6:if(r=t.sent,r.ok){t.next=9;break}return t.abrupt("return");case 9:e.$router.push({name:"intro"}),e.$store.commit("updateScriptListSyncTime");case 11:case"end":return t.stop()}}),t)})))()},cloneData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.prompt(e.$t("Please input new Script Set ID"),"".concat(e.scriptSetId,"_2"));case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,e.T.callAPI_getOne("/api/v1/script-sets/do/list",r);case 7:if(a=t.sent,!a.data){t.next=10;break}return t.abrupt("return",e.T.alert(e.$t("Inputed Script Set ID already exists")));case 10:return t.next=12,e.T.callAPI("post","/api/v1/script-sets/:id/do/clone",{params:{id:e.scriptSetId},body:{newId:r},alert:{okMessage:e.$t("Script Set cloned")}});case 12:if(a=t.sent,a.ok){t.next=15;break}return t.abrupt("return");case 15:e.$store.commit("updateScriptListSyncTime");case 16:case"end":return t.stop()}}),t)})))()},goToPIPTool:function(){this.$router.push({name:"pip-tool",query:{pkgs:this.T.getBase64(this.requirementsTEXT)}})}},computed:{formRules:function(){var e=this;return{id:[{trigger:"change",message:this.$t("Please input ID"),required:!0},{trigger:"change",message:this.$t("Only alphabets, numbers and underscore are allowed"),pattern:/^[a-zA-Z0-9_]*$/g},{trigger:"change",message:this.$t("Cannot not starts with a number"),pattern:/^[^0-9]/g},{trigger:"change",validator:function(t,r,a){if(r.indexOf("__")>=0){var n=e.$t('ID cannot contains double underscore "__"');return a(new Error(n))}return a()}}]}},pageTitle:function(){var e={setup:this.$t("Setup Script Set"),add:this.$t("Add Script Set")};return e[this.T.pageMode()]},scriptSetId:function(){switch(this.T.pageMode()){case"add":return this.form.id;case"setup":return this.$route.params.id}},isLockedByOther:function(){return this.data.lockedByUserId&&this.data.lockedByUserId!==this.$store.getters.userId},requirementsTEXT:function(){if(!this.form.requirements)return null;var e=this.form.requirements.split(/\s+/).join(" ");return e}},props:{},data:function(){return{data:{},form:{id:null,title:null,description:null,requirements:null}}}}),o=i,c=r("2877"),u=r("70a3"),l=Object(c["a"])(o,a,n,!1,null,"07ca2bbd",null);"function"===typeof u["default"]&&Object(u["default"])(l);t["default"]=l.exports}}]);
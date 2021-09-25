(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aec5deb4"],{4168:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.$store.state.isLoaded?r("el-container",{attrs:{direction:"vertical"}},[r("el-header",{attrs:{height:"60px"}},[r("h1",[t._v("\n        "+t._s(t.modeName)+"脚本包\n        "),r("div",{staticClass:"header-control"},[r("el-button",{attrs:{size:"small"},on:{click:t.goToHistory}},[r("i",{staticClass:"fa fa-fw fa-history"}),t._v("\n            脚本包导入历史\n          ")])],1)])]),t._v(" "),r("el-main",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:15}},[r("div",{staticClass:"common-form"},[r("el-form",{ref:"form",attrs:{"label-width":"120px",model:t.form,rules:t.formRules}},[r("el-form-item",{attrs:{label:"导入脚本包",prop:"upload"}},[r("el-upload",{ref:"upload",class:t.uploadAreaBorderClass,attrs:{drag:"",limit:2,multiple:!1,"auto-upload":!1,"show-file-list":!1,"http-request":t.handleUpload,"on-change":t.onUploadFileChange,accept:t.$store.getters.CONFIG("_FUNC_PKG_EXPORT_EXT"),action:""}},[r("i",{staticClass:"fa",class:t.uploadAreaIconClass}),t._v(" "),r("div",{staticClass:"el-upload__text"},[r("span",{domProps:{innerHTML:t._s(t.uploadAreaIconText)}})])])],1),t._v(" "),r("el-form-item",{attrs:{label:"导入令牌",prop:"password"}},[r("el-input",{attrs:{resize:"none",maxlength:"64","show-word-limit":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),r("InfoBlock",{attrs:{title:"填写导出时提示的密码，无密码则留空即可"}})],1),t._v(" "),r("el-form-item",[r("div",{staticClass:"setup-right"},[r("el-button",{attrs:{type:"primary",disabled:t.disableUpload},on:{click:t.submitData}},[t._v(t._s(t.modeName))])],1)])],1)],1)]),t._v(" "),r("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1),t._v(" "),r("el-dialog",{attrs:{title:"即将导入脚本包",visible:t.showConfirm,"close-on-click-modal":!0,"close-on-press-escape":!0,"show-close":!0,width:"750px"},on:{"update:visible":function(e){t.showConfirm=e}}},[r("span",{staticClass:"import-token-dialog-content"},[t.checkResult&&t.checkResult.diff?[t.T.isNothing(t.checkResult.diff.add)?t._e():[r("span",{staticClass:"text-good"},[t._v("新增脚本集：")]),t._v(" "),t._l(t.checkResult.diff.add,(function(e){return r("el-tag",{key:e.id,attrs:{size:"medium",type:"success"}},[t._v(t._s(e.title||e.id))])})),t._v(" "),r("hr",{staticClass:"br"})],t._v(" "),t.T.isNothing(t.checkResult.diff.replace)?t._e():[r("span",{staticClass:"text-watch"},[t._v("替换脚本集：")]),t._v(" "),t._l(t.checkResult.diff.replace,(function(e){return r("el-tag",{key:e.id,attrs:{size:"medium",type:"warning"}},[t._v(t._s(e.title||e.id))])})),t._v(" "),r("InfoBlock",{attrs:{type:"warning",title:"被替换的脚本集下所有脚本文件会被完整替换为新版本，新版本中不存在的脚本文件会被删除"}}),t._v(" "),r("hr",{staticClass:"br"})]]:t._e(),t._v(" "),t.checkResult&&t.checkResult.summary&&t.checkResult.summary.note?[r("span",{staticClass:"text-info"},[t._v("备注：")]),t._v(" "),r("pre",{staticClass:"import-note"},[t._v(t._s(t.checkResult.summary.note))]),t._v(" "),r("hr",{staticClass:"br"})]:t._e()],2),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.showConfirm=!1}}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.isImporting},on:{click:t.confirmImport}},[t._v("\n          确认导入\n        ")])],1)])],1):t._e()],1)},o=[],s=r("1da1"),n=(r("a15b"),r("130f"),r("a434"),r("b0c0"),r("96cf"),{name:"ScriptSetImport",components:{},watch:{},methods:{submitData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",console.error(e.t0));case 8:e.t1=t.T.pageMode(),e.next="import"===e.t1?11:14;break;case 11:return e.next=13,t.$refs.upload.submit();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e,null,[[0,5]])})))()},handleUpload:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,o,s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(s in a=new FormData,o=e.T.jsonCopy(e.form),o)o.hasOwnProperty(s)&&(n=o[s],a.append(s,n));return a.append("checkOnly",!0),a.append("files",t.file),r.next=7,e.T.callAPI("post","/api/v1/script-sets/do/import",{body:a,alert:{muteError:!0}});case 7:if(i=r.sent,i.ok){r.next=10;break}return r.abrupt("return",e.alertOnError(i));case 10:e.showConfirm=!0,e.checkResult=i.data;case 12:case"end":return r.stop()}}),r)})))()},confirmImport:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isImporting=!0,e.next=3,t.T.callAPI("post","/api/v1/script-sets/do/confirm-import",{body:{confirmId:t.checkResult.confirmId},alert:{okMessage:t.$t("Data imported")}});case 3:if(r=e.sent,t.isImporting=!1,r.ok){e.next=7;break}return e.abrupt("return",t.alertOnError(r));case 7:if(!t.T.isNothing(r.data.pkgs)){e.next=11;break}t.goToHistory(),e.next=20;break;case 11:return t.showConfirm=!1,e.next=14,t.T.confirm(t.$t("Imported Script Set requires 3rd party packages, do you want to open PIP tool now?"));case 14:if(e.sent){e.next=18;break}t.goToHistory(),e.next=20;break;case 18:a=r.data.pkgs.join(" "),t.$router.push({name:"pip-tool",query:{pkgs:t.T.getBase64(a)}});case 20:case"end":return e.stop()}}),e)})))()},alertOnError:function(t){var e=this;if(!t.ok){switch(t.reason){case"EBizCondition.InvalidPassword":this.T.alert("导入令牌错误<br>\n              请使用复制粘贴的方式填写导入令牌，避免错填容易混淆的字母数字");break;case"EBizCondition.ConfirmingImportTimeout":this.T.alert("脚本包导入确认超时<br>\n              脚本包导入后长时间未确认，请重新尝试导入");break;default:this.T.alert("脚本包导入时发生意外错误<br>\n              请尝试重新导入，如果问题一直出现，请联系脚本包发行方");break}this.form.password="",this.initFilePreview(),setImmediate((function(){e.$refs.form.clearValidate()}))}},initFilePreview:function(){this.$refs.upload.clearFiles(),this.uploadAreaBorderClass=[],this.uploadAreaIconClass=["fa-cloud-upload"],this.uploadAreaIconText="将文件拖到此处，或<em>点击上传</em>"},showFilePreview:function(t){this.uploadAreaBorderClass=["upload-area-active"],this.uploadAreaIconClass=["fa-cloud-upload","text-main"],this.uploadAreaIconText='<code class="text-main">'.concat(t,"</code>")},onUploadFileChange:function(t,e){e.length>1&&e.splice(0,1),this.disableUpload=e.length<=0,this.disableUpload?this.initFilePreview():this.showFilePreview(e[0].name)},goToHistory:function(){this.$router.push({name:"script-set-import-history-list"})}},computed:{modeName:function(){var t={import:"导入"};return t[this.T.pageMode()]}},props:{},data:function(){return{scriptSetMap:{},uploadAreaBorderClass:[],uploadAreaIconClass:["fa-cloud-upload"],uploadAreaIconText:"将文件拖到此处，或<em>点击上传</em>",disableUpload:!0,showConfirm:!1,isImporting:!1,checkResult:{},form:{password:""},formRules:{}}},created:function(){this.$store.commit("updateLoadStatus",!0)}}),i=n,l=(r("df7e"),r("a347"),r("2877")),c=r("fcf7"),u=Object(l["a"])(i,a,o,!1,null,"9cfac86a",null);"function"===typeof c["default"]&&Object(c["default"])(u);e["default"]=u.exports},6140:function(t,e,r){},a347:function(t,e,r){"use strict";r("6140")},a434:function(t,e,r){"use strict";var a=r("23e7"),o=r("23cb"),s=r("a691"),n=r("50c4"),i=r("7b0b"),l=r("65f0"),c=r("8418"),u=r("1dde"),d=Math.max,p=Math.min,f=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var r,a,u,h,v,w,_=i(this),b=n(_.length),g=o(t,b),k=arguments.length;if(0===k?r=a=0:1===k?(r=0,a=b-g):(r=k-2,a=p(d(s(e),0),b-g)),b+r-a>f)throw TypeError(m);for(u=l(_,a),h=0;h<a;h++)v=g+h,v in _&&c(u,h,_[v]);if(u.length=a,r<a){for(h=g;h<b-a;h++)v=h+a,w=h+r,v in _?_[w]=_[v]:delete _[w];for(h=b;h>b-a+r;h--)delete _[h-1]}else if(r>a)for(h=b-a;h>g;h--)v=h+a-1,w=h+r-1,v in _?_[w]=_[v]:delete _[w];for(h=0;h<r;h++)_[h+g]=arguments[h+2];return _.length=b-a+r,u}})},c5f3:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Data imported":"数据已导入","Imported Script Set requires 3rd party packages, do you want to open PIP tool now?":"导入的脚本集需要第三方包，是否现在前往PIP工具？"}}'),delete t.options._Ctor}},ddb7:function(t,e,r){},df7e:function(t,e,r){"use strict";r("ddb7")},fcf7:function(t,e,r){"use strict";var a=r("c5f3"),o=r.n(a);e["default"]=o.a}}]);
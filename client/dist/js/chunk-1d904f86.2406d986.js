(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d904f86"],{"0184":function(t,e,i){"use strict";i("c2b9")},"03fb":function(t,e,i){"use strict";i("aa55")},"0d62":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("el-container",[i("el-header",{staticClass:"code-viewer",staticStyle:{height:"unset !important"}},[i("div",{staticClass:"code-viewer-action-left"},[i("code",{staticClass:"code-viewer-action-title"},[i("i",{staticClass:"fa fa-file-code-o"}),t._v("\n          "+t._s(t.data.id)+"\n          "),i("el-tooltip",{attrs:{content:t.$t("Script Setup"),placement:"bottom",enterable:!1}},[i("el-button",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"script-setup",params:{id:t.data.id}})}}},[t.isLockedByOther?i("i",{staticClass:"fa fa-fw fa-search"}):i("i",{staticClass:"fa fa-fw fa-wrench"})])],1)],1)]),t._v(" "),i("div",{staticClass:"code-viewer-action-breaker hidden-lg-and-up"}),t._v(" "),i("div",{staticClass:"code-viewer-action-right"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.conflictStatus,expression:"conflictStatus"}]},["otherTab"===t.conflictStatus?i("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Script is under editing mode in other browser tab, please wait...")))]):"otherClient"===t.conflictStatus?i("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Script is under editing mode in other client, please wait...")))]):t._e(),t._v("\n            　\n            　\n          ")]),t._v(" "),t.conflictStatus?t._e():i("el-form-item",[i("el-tooltip",{attrs:{placement:"bottom",enterable:!1}},[i("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n                "+t._s(t.$t("Shortcut"))+t._s(t.$t(":"))+" "),i("code",[t._v(t._s(t.T.getSuperKeyName())+" + E")])]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.startEdit}},[i("i",{staticClass:"fa fa-fw",class:[t.USER_OPERATION_META_MAP[t.userOperation].icon]}),t._v(" "+t._s(t.USER_OPERATION_META_MAP[t.userOperation].text))])],1)],1),t._v(" "),i("el-form-item",[i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",filterable:"",placeholder:t.$t("Select Func")},model:{value:t.selectedFuncId,callback:function(e){t.selectedFuncId=e},expression:"selectedFuncId"}},t._l(t.draftFuncs,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),t.isLockedByOther?t._e():i("el-form-item",[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.showMode,callback:function(e){t.showMode=e},expression:"showMode"}},t._l(t.SHOW_MODE_META_MAP,(function(e,r,n){return i("el-tooltip",{key:r,attrs:{placement:"bottom",enterable:!1}},[i("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n                  "+t._s(t.$t("Shortcut"))+t._s(t.$t(":"))+" "),i("code",[t._v(t._s(t.T.getSuperKeyName())+" + "+t._s(n+1))])]),t._v(" "),i("el-radio-button",{attrs:{label:r}},[t._v(t._s(e.text))])],1)})),1)],1),t._v(" "),t.isLockedByOther?t._e():i("el-form-item",[i("el-tooltip",{attrs:{content:t.$t("Download"),placement:"bottom",enterable:!1}},[i("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.download}},[t._v(t._s(t.$t("Download {type}",{type:t.SHOW_MODE_META_MAP[t.showMode].text})))])],1)],1)],1)],1),t._v(" "),t.scriptSet.isBuiltin?i("InfoBlock",{attrs:{type:"warning",title:t.$t("This is a builtin Script, code will be reset when the system restarts")}}):t.isLockedByOther?i("InfoBlock",{attrs:{type:"error",title:t.$t("This Script has been locked by other, editing is disabled")}}):i("InfoBlock",{attrs:{type:"warning",title:t.$t("Currently in view mode, click Edit button to enter edit mode")}})],1),t._v(" "),i("el-main",{style:t.$store.getters.codeMirrorSetting.style,attrs:{id:"editorContainer_CodeViewer"}},[i("textarea",{attrs:{id:"editor_CodeViewer"}}),t._v(" "),i("h1",{attrs:{id:"viewModeHint"}},[t._v(t._s(t.$t("View Mode")))])])],1)],1)},n=[],o=i("1da1"),a=(i("130f"),i("99af"),i("a630"),i("3ca3"),i("a1f0"),i("ac1f"),i("1276"),i("5319"),i("498a"),i("159b"),i("96cf"),i("bf68")),s=i("21a6"),c=i.n(s),d={name:"CodeViewer",components:{},watch:{$route:{immediate:!0,handler:function(t,e){var i=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.loadData();case 2:case"end":return t.stop()}}),t)})))()}},showMode:function(t){this.loadData()},selectedFuncId:function(t){this.$store.commit("updateEditor_highlightedFuncId",t),this.highlightFunc(t)},highlightedFuncId:function(t){this.selectedFuncId=t},codeMirrorTheme:function(t){this.codeMirror.setOption("theme",t)},"$store.state.shortcutAction":function(t){switch(t.action){case"codeViewer.showDraft":this.showMode="draft";break;case"codeViewer.showPublished":this.showMode="published";break;case"codeViewer.showDiff":this.showMode="diff";break;case"codeViewer.enterEditor":this.conflictStatus||this.startEdit();break}}},methods:{loadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_get("/api/v1/scripts/:id/do/get",{params:{id:t.$route.params.id}});case 2:if(i=e.sent,i.ok){e.next=6;break}return t.$router.push({name:"intro"}),e.abrupt("return");case 6:return t.data=i.data,r=t.T.getDiffInfo(t.data.code,t.data.codeDraft),t.diffAddedCount=r.addedCount,t.diffRemovedCount=r.removedCount,e.next=13,t.T.callAPI_getOne("/api/v1/script-sets/do/list",t.scriptSetId);case 13:if(i=e.sent,i.ok){e.next=16;break}return e.abrupt("return");case 16:t.scriptSet=i.data,t.$store.commit("updateLoadStatus",!0),setImmediate((function(){switch(t.codeMirror.setValue(""),t.showMode){case"draft":case"published":var e=t.SHOW_MODE_META_MAP[t.showMode].codeField;t.codeMirror.setValue(t.data[e]||""),t.T.setCodeMirrorMode(t.codeMirror,"python");break;case"diff":var i=t.data.title?" (".concat(t.data.title,")"):"",r="".concat(t.scriptId).concat(i),n=t.data.code||"",o=t.data.codeDraft||"",s=t.$t("Published Code"),c=t.$t("Saved Draft Code"),d=Object(a["createPatch"])(r,n,o,s,c);t.codeMirror.setValue(d),t.T.setCodeMirrorMode(t.codeMirror,"diff");break}t.codeMirror.refresh(),t.updateFuncList(),t.selectedFuncId=t.highlightedFuncId,t.$store.commit("updateCodeViewer_isCodeLoaded",!0)}));case 19:case"end":return e.stop()}}),e)})))()},startEdit:function(){this.$router.push({name:"code-editor",params:{id:this.data.id}})},updateFuncList:function(){var t=this;if(this.data.codeDraft){var e=/^def ([a-zA-Z][a-zA-Z0-9_]+)\((.*)\)\:/gm,i=Array.from(this.data.codeDraft.matchAll(e),(function(e){var i=e[1],r="".concat(t.scriptId,".").concat(i),n=e[2].replace(/\n/g," ").split(",").reduce((function(t,e){var i=e.trim().split("=")[0];return i&&(t[i]="".concat(i.toUpperCase())),t}),{});return{id:r,name:i,kwargs:n}})),r=[],n={};i.forEach((function(t){n[t.id]||(r.push(t),n[t.id]=!0)})),this.draftFuncs=r}},_clearLineHighlight:function(t){try{this.codeMirror.removeLineClass(t,"text"),this.codeMirror.removeLineClass(t,"background"),this.codeMirror.removeLineClass(t,"wrap");var e=this.codeMirror.lineInfo(t).widgets;Array.isArray(e)&&e.forEach((function(t){t.clear()}))}catch(i){}},_setLineHighlight:function(t){if(!this.codeMirror)return null;t=t||{};var e=t.line+(t.scroll||0);if(e=Math.min(Math.max(e,0),this.codeMirror.lineCount()-1),"next"===t.marginType?(this.codeMirror.setCursor({line:this.codeMirror.lineCount()-1}),this.codeMirror.setCursor({line:e})):"prev"===t.marginType&&(this.codeMirror.setCursor({line:0}),this.codeMirror.setCursor({line:e})),this.codeMirror.setCursor({line:t.line}),t.textClass&&this.codeMirror.addLineClass(t.line,"text",t.textClass),t.backgroundClass&&this.codeMirror.addLineClass(t.line,"background",t.backgroundClass),t.wrapClass&&this.codeMirror.addLineClass(t.line,"wrap",t.wrapClass),t.lineWidgetConfig){var i=t.lineWidgetConfig,r=null;switch(i.type){}r&&this.codeMirror.addLineWidget(t.line,r)}return this.codeMirror.lineInfo(t.line)},updateHighlightLineConfig:function(t,e){var i=this.T.jsonCopy(this.$store.state.codeViewer_highlightedLineConfigMap)||{};if(null===e?i[this.scriptId]&&delete i[this.scriptId][t]:(i[this.scriptId]||(i[this.scriptId]={}),i[this.scriptId][t]=e),this.codeMirror){for(var r in this.highlightedLineInfoMap)if(this.highlightedLineInfoMap.hasOwnProperty(r)){var n=this.highlightedLineInfoMap[r];for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];this._clearLineHighlight(a.handle.lineNo())}}var s={},c=i[this.scriptId]||{};for(var d in c)if(c.hasOwnProperty(d)){var l=c[d],u=this._setLineHighlight(l);u&&(s[this.scriptId]||(s[this.scriptId]={}),s[this.scriptId][d]=u)}this.highlightedLineInfoMap=s,this.$store.commit("updateCodeViewer_highlightedLineConfigMap",i)}},highlightFunc:function(t){if(this.codeMirror&&t){var e=t.split(".")[1];this.updateHighlightLineConfig("selectedFuncLine",null);var i="def ".concat(e,"("),r=this.codeMirror.getSearchCursor(i);if(r.findNext()){var n=r.from().line;this.updateHighlightLineConfig("selectedFuncLine",{line:n,marginType:"next",scroll:-1,textClass:"highlight-text",backgroundClass:"current-func-background highlight-code-line-blink"})}}},download:function(){var t=new Blob([this.codeMirror.getValue()],{type:"text/plain"}),e=null;switch(this.showMode){case"draft":e=this.data.id+".draft.py";break;case"published":e=this.data.id+".py";break;case"diff":e=this.data.id+".py.diff";break}c.a.saveAs(t,e)}},computed:{USER_OPERATION_META_MAP:function(){return{edit:{text:this.$t("Edit"),icon:"fa-edit"},debug:{text:this.$t("Debug"),icon:"fa-search"}}},SHOW_MODE_META_MAP:function(){return{draft:{text:this.$t("Draft"),codeField:"codeDraft"},published:{text:this.$t("Published"),codeField:"code"},diff:{text:this.$t("DIFF"),codeField:null}}},codeMirrorTheme:function(){return this.T.getCodeMirrorThemeName()},scriptId:function(){return this.$route.params.id},scriptSetId:function(){return this.scriptId.split("__")[0]},conflictStatus:function(){return this.$store.getters.getConflictStatus(this.$route)},isLockedByOther:function(){return this.data.lockedByUserId&&this.data.lockedByUserId!==this.$store.getters.userId||this.scriptSet.lockedByUserId&&this.scriptSet.lockedByUserId!==this.$store.getters.userId},userOperation:function(){return this.isLockedByOther?"debug":"edit"},highlightedFuncId:function(){return this.$store.state.Editor_highlightedFuncId},codeLines:function(){return(this.data.code||"").split("\n").length},codeDraftLines:function(){return(this.data.codeDraft||"").split("\n").length}},props:{},data:function(){return{codeMirror:null,highlightedLineInfoMap:{},data:{},scriptSet:{},draftFuncs:[],selectedFuncId:"",showMode:"draft",diffAddedCount:0,diffRemovedCount:0}},mounted:function(){var t=this;setImmediate((function(){t.codeMirror=t.T.initCodeMirror("editor_CodeViewer"),t.codeMirror.setOption("theme",t.codeMirrorTheme),t.T.setCodeMirrorReadOnly(t.codeMirror,!0)}))}},l=d,u=(i("0184"),i("03fb"),i("2877")),f=i("7f09"),h=i("2383"),p=Object(u["a"])(l,r,n,!1,null,"1820a9b8",null);"function"===typeof f["default"]&&Object(f["default"])(p),"function"===typeof h["default"]&&Object(h["default"])(p);e["default"]=p.exports},"1c7e":function(t,e,i){var r=i("b622"),n=r("iterator"),o=!1;try{var a=0,s={next:function(){return{done:!!a++}},return:function(){o=!0}};s[n]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var i=!1;try{var r={};r[n]=function(){return{next:function(){return{done:i=!0}}}},t(r)}catch(c){}return i}},"21a6":function(t,e,i){(function(i){var r,n,o;(function(i,a){n=[],r=a,o="function"===typeof r?r.apply(e,n):r,void 0===o||(t.exports=o)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function r(t,e,i){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){s(r.response,e,i)},r.onerror=function(){console.error("could not download file")},r.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i&&i.global===i?i:void 0,s=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,i){var s=a.URL||a.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?o(c):n(c.href)?r(t,e,i):o(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,a){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),i);else if(n(t))r(t,i,a);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){o(s)}))}}:function(t,e,i,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return r(t,e,i);var o="application/octet-stream"===t.type,s=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&s)&&"object"==typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},d.readAsDataURL(t)}else{var l=a.URL||a.webkitURL,u=l.createObjectURL(t);n?n.location=u:location.href=u,n=null,setTimeout((function(){l.revokeObjectURL(u)}),4e4)}});a.saveAs=s.saveAs=s,t.exports=s}))}).call(this,i("c8ba"))},2383:function(t,e,i){"use strict";var r=i("25c2"),n=i.n(r);e["default"]=n.a},"25c2":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Script Setup":"脚本设置","Script is under editing mode in other browser tab, please wait...":"其他标签页或窗口正在编辑此脚本，请稍后...","Script is under editing mode in other client, please wait...":"其他客户端正在编辑此脚本，请稍后...","Shortcut":"快捷键","Select Func":"选择聚焦函数","Draft":"草稿","Published":"已发布","DIFF":"差异","Download {type}":"下载{type}","Setup Code Editor":"调整编辑器显示样式","This is a builtin Script, code will be reset when the system restarts":"这是一个内置脚本，代码会在系统重启后复位","This Script has been locked by other, editing is disabled":"当前脚本被其他用户锁定，无法修改","Currently in view mode, click Edit button to enter edit mode":"当前为查看模式，点击「编辑」按钮进入编辑模式","View Mode":"查看模式","Published Code":"已发布的代码","Saved Draft Code":"已保存的草稿代码"}}'),delete t.options._Ctor}},"35a1":function(t,e,i){var r=i("f5df"),n=i("3f8c"),o=i("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||n[r(t)]}},"4df4":function(t,e,i){"use strict";var r=i("f8c2"),n=i("7b0b"),o=i("9bdd"),a=i("e95a"),s=i("50c4"),c=i("8418"),d=i("35a1");t.exports=function(t){var e,i,l,u,f,h=n(t),p="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,m=void 0!==v,w=0,b=d(h);if(m&&(v=r(v,g>2?arguments[2]:void 0,2)),void 0==b||p==Array&&a(b))for(e=s(h.length),i=new p(e);e>w;w++)c(i,w,m?v(h[w],w):h[w]);else for(u=b.call(h),f=u.next,i=new p;!(l=f.call(u)).done;w++)c(i,w,m?o(u,v,[l.value,w],!0):l.value);return i.length=w,i}},"7e33":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"codeLines":"{n} line | {n} lines"}}'),delete t.options._Ctor}},"7f09":function(t,e,i){"use strict";var r=i("7e33"),n=i.n(r);e["default"]=n.a},"9bdd":function(t,e,i){var r=i("825a");t.exports=function(t,e,i,n){try{return n?e(r(i)[0],i[1]):e(i)}catch(a){var o=t["return"];throw void 0!==o&&r(o.call(t)),a}}},a1f0:function(t,e,i){"use strict";var r=i("23e7"),n=i("9ed3"),o=i("1d80"),a=i("50c4"),s=i("1c0b"),c=i("825a"),d=i("c6b6"),l=i("44e7"),u=i("ad6d"),f=i("9112"),h=i("d039"),p=i("b622"),g=i("4840"),v=i("8aa5"),m=i("69f3"),w=i("c430"),b=p("matchAll"),_="RegExp String",y=_+" Iterator",M=m.set,C=m.getterFor(y),x=RegExp.prototype,S=x.exec,k="".matchAll,I=!!k&&!h((function(){"a".matchAll(/./)})),E=function(t,e){var i,r=t.exec;if("function"==typeof r){if(i=r.call(t,e),"object"!=typeof i)throw TypeError("Incorrect exec result");return i}return S.call(t,e)},L=n((function(t,e,i,r){M(this,{type:y,regexp:t,string:e,global:i,unicode:r,done:!1})}),_,(function(){var t=C(this);if(t.done)return{value:void 0,done:!0};var e=t.regexp,i=t.string,r=E(e,i);return null===r?{value:void 0,done:t.done=!0}:t.global?(""==String(r[0])&&(e.lastIndex=v(i,a(e.lastIndex),t.unicode)),{value:r,done:!1}):(t.done=!0,{value:r,done:!1})})),A=function(t){var e,i,r,n,o,s,d=c(this),l=String(t);return e=g(d,RegExp),i=d.flags,void 0===i&&d instanceof RegExp&&!("flags"in x)&&(i=u.call(d)),r=void 0===i?"":String(i),n=new e(e===RegExp?d.source:d,r),o=!!~r.indexOf("g"),s=!!~r.indexOf("u"),n.lastIndex=a(d.lastIndex),new L(n,l,o,s)};r({target:"String",proto:!0,forced:I},{matchAll:function(t){var e,i,r,n,a=o(this);if(null!=t){if(l(t)&&(e=String(o("flags"in x?t.flags:u.call(t))),!~e.indexOf("g")))throw TypeError("`.matchAll` does not allow non-global regexes");if(I)return k.apply(a,arguments);if(r=t[b],void 0===r&&w&&"RegExp"==d(t)&&(r=A),null!=r)return s(r).call(t,a)}else if(I)return k.apply(a,arguments);return i=String(a),n=new RegExp(t,"g"),w?A.call(n,i):n[b](i)}}),w||b in x||f(x,b,A)},a630:function(t,e,i){var r=i("23e7"),n=i("4df4"),o=i("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:n})},aa55:function(t,e,i){},c2b9:function(t,e,i){},e95a:function(t,e,i){var r=i("b622"),n=i("3f8c"),o=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||a[o]===t)}}}]);
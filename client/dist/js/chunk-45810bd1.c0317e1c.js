(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45810bd1"],{"0797":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Download as text file":"作为文本文件下载"}}'),delete e.options._Ctor}},1770:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Type":"类型","Never expires":"永不过期","Memory usage":"内存使用","Show content":"显示内容","Func Cache data deleted":"函数缓存数据已删除","Search for more data":"搜索以查看更多内容","Search Func Cache data(Key, Scope)":"搜索函数缓存数据（Key、Scope）","No Func Cache data has ever been added":"从未添加过任何函数缓存数据","Are you sure you want to delete the Func Cache data?":"是否确认删除此函数缓存数据？"}}'),delete e.options._Ctor}},"21a6":function(e,t,n){(function(n){var a,o,r;(function(n,s){o=[],a=s,r="function"===typeof a?a.apply(t,o):a,void 0===r||(e.exports=r)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var c=s.URL||s.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?r(i):o(i.href)?a(e,t,n):r(i,i.target="_blank")):(i.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(i.href)}),4e4),setTimeout((function(){r(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(o(e))a(e,n,s);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){r(c)}))}}:function(e,t,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var r="application/octet-stream"===e.type,c=/constructor/i.test(s.HTMLElement)||s.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||r&&c)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,d=u.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c}))}).call(this,n("c8ba"))},"3a14":function(e,t,n){"use strict";var a=n("1770"),o=n.n(a);t["default"]=o.a},"7b0b4":function(e,t,n){"use strict";var a=n("0797"),o=n.n(a);t["default"]=o.a},a7e8:function(e,t,n){"use strict";n("b217")},b217:function(e,t,n){},b76c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{id:"LongTextDialog",visible:e.show,width:"70%"},on:{"update:visible":function(t){e.show=t}}},[n("template",{slot:"title"},[e.showDownload&&e.fileName&&e.content?n("el-link",{attrs:{type:"primary"},on:{click:e.download}},[e._v("\n      "+e._s(e.$t("Download as text file"))+"\n      "),n("i",{staticClass:"fa fa-fw fa-download"})]):e._e()],1),e._v(" "),n("div",[n("p",[e._v(e._s(e.title))]),e._v(" "),n("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},o=[],r=(n("130f"),n("21a6")),s=n.n(r),c={name:"LongTextDialog",components:{},watch:{},methods:{update:function(e,t){var n=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=e,this.fileName=(t||"dump")+".txt",this.show=!0,setImmediate((function(){n.codeMirror||(n.codeMirror=n.T.initCodeMirror("longTextDialogContent",n.mode||"text"),n.codeMirror.setOption("theme",n.T.getCodeMirrorThemeName()),n.T.setCodeMirrorReadOnly(n.codeMirror,!0)),n.codeMirror.setValue(n.content||""),n.codeMirror.refresh()}))},download:function(){var e=new Blob([this.content],{type:"text/plain"}),t=this.fileName;s.a.saveAs(e,t)}},computed:{},props:{title:String,mode:Boolean,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}}},i=c,l=(n("a7e8"),n("2877")),u=n("7b0b4"),d=Object(l["a"])(i,a,o,!1,null,"30713cee",null);"function"===typeof u["default"]&&Object(u["default"])(d);t["a"]=d.exports},dc73:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.$store.state.isLoaded?n("el-container",{attrs:{direction:"vertical"}},[n("el-header",{attrs:{height:"60px"}},[n("h1",[e._v("\n        "+e._s(e.$t("Func Cache Manager"))+"\n        "),n("div",{staticClass:"header-control"},[n("small",{staticClass:"text-info"},[e._v(e._s(e.$t("Search for more data")))]),e._v(" "),n("FuzzySearchInput",{attrs:{dataFilter:e.dataFilter,searchTip:e.$t("Search Func Cache data(Key, Scope)")}})],1)])]),e._v(" "),n("el-main",{staticClass:"common-table-container"},[e.T.isNothing(e.data)?n("div",{staticClass:"no-data-area"},[e.T.isPageFiltered()?n("h1",{staticClass:"no-data-title"},[e._v(e._s(e.$t("No matched data found")))]):n("h1",{staticClass:"no-data-title"},[e._v(e._s(e.$t("No Func Cache data has ever been added")))]),e._v(" "),n("p",{staticClass:"no-data-tip"},[e._v("\n          可以使用"),n("code",[e._v("DFF.CACHE.set('key', 'value', scope='scope', expire=3600)")]),e._v("和"),n("code",[e._v("DFF.CACHE('key', scope='scope')")]),e._v("来存取函数缓存数据\n          "),n("br"),n("code",[e._v("scope")]),e._v("参数为可选。未指定时则默认为代码所在的脚本ID\n        ")])]):n("el-table",{staticClass:"common-table",attrs:{height:"100%",data:e.data}},[n("el-table-column",{attrs:{label:e.$t("Type"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("code",[e._v(e._s(t.row.type.toLowerCase()))])]}}],null,!1,2706387676)}),e._v(" "),n("el-table-column",{attrs:{label:"Key"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("code",{staticClass:"text-code"},[e._v(e._s(t.row.key))]),n("CopyButton",{attrs:{content:t.row.key}})]}}],null,!1,3746719067)}),e._v(" "),n("el-table-column",{attrs:{label:"Scope"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("code",{staticClass:"text-code"},[e._v(e._s(t.row.scope))]),n("CopyButton",{attrs:{content:t.row.scope}})]}}],null,!1,1964362459)}),e._v(" "),n("el-table-column",{attrs:{label:"TTL",sortable:"","sort-by":"ttl",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[-1===t.row.ttl?n("span",{staticClass:"text-bad"},[e._v(e._s(e.$t("Never expires")))]):[n("code",{staticClass:"text-good"},[e._v(e._s(t.row.ttl))])]]}}],null,!1,129459365)}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("Memory usage"),sortable:"","sort-by":"memoryUsage",align:"right",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("code",{class:{"text-bad":t.row.isOverSized}},[e._v(e._s(t.row.memoryUsageHuman))])]}}],null,!1,4266185916)}),e._v(" "),n("el-table-column",{attrs:{align:"right",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[["string","list","hash"].indexOf(t.row.type)>=0&&!t.row.isOverSized?n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.showDetail(t.row)}}},[e._v(e._s(e.$t("Show content")))]):e._e(),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.quickSubmitData(t.row,"delete")}}},[e._v(e._s(e.$t("Delete")))])]}}],null,!1,1590439614)})],1)],1),e._v(" "),n("LongTextDialog",{ref:"longTextDialog",attrs:{title:"内容如下",showDownload:!0}})],1):e._e()],1)},o=[],r=n("1da1"),s=(n("159b"),n("99af"),n("96cf"),n("b76c")),c={name:"FuncCacheManager",components:{LongTextDialog:s["a"]},watch:{$route:{immediate:!0,handler:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.callAPI_get("/api/v1/func-caches/do/list",{query:e.T.createListQuery()});case 2:if(n=t.sent,n.ok){t.next=5;break}return t.abrupt("return");case 5:e.data=n.data,e.data.forEach((function(t){t.memoryUsage&&(t.memoryUsageHuman=e.T.byteSizeHuman(t.memoryUsage),t.isOverSized=t.memoryUsage>5242880)})),e.$store.commit("updateLoadStatus",!0);case 8:case"end":return t.stop()}}),t)})))()},quickSubmitData:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o='<small>\n          <br>Key: <code class="text-code">'.concat(e.key,'</code>\n          <br>Scope: <code class="text-code">').concat(e.scope,"</code>\n        <small>"),a.t0=t,a.next="delete"===a.t0?4:9;break;case 4:return a.next=6,n.T.confirm(n.$t("Are you sure you want to delete the Func Cache data?")+o);case 6:if(a.sent){a.next=8;break}return a.abrupt("return");case 8:return a.abrupt("break",9);case 9:r=null,a.t1=t,a.next="delete"===a.t1?13:17;break;case 13:return a.next=15,n.T.callAPI("/api/v1/func-caches/:scope/:key/do/delete",{params:{scope:e.scope,key:e.key},alert:{okMessage:n.$t("Func Cache data deleted")}});case 15:return r=a.sent,a.abrupt("break",17);case 17:if(r&&r.ok){a.next=19;break}return a.abrupt("return");case 19:return a.next=21,n.loadData();case 21:case"end":return a.stop()}}),a)})))()},showDetail:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.T.callAPI_get("/api/v1/func-caches/:scope/:key/do/get",{params:{scope:e.scope,key:e.key}});case 2:if(a=n.sent,a.ok){n.next=5;break}return n.abrupt("return");case 5:o=a.data;try{"string"===typeof o&&(o=JSON.parse(o)),o=JSON.stringify(o,null,2)}catch(c){}r=t.M(e.createTime).utcOffset(8).format("YYYYMMDD_HHmmss"),s="".concat(e.scope,".").concat(e.key,".").concat(r),t.$refs.longTextDialog.update(o,s);case 10:case"end":return n.stop()}}),n)})))()}},computed:{},props:{},data:function(){var e=this.T.createListQuery();return{data:[],dataFilter:{_fuzzySearch:e._fuzzySearch}}}},i=c,l=n("2877"),u=n("3a14"),d=Object(l["a"])(i,a,o,!1,null,"701679b4",null);"function"===typeof u["default"]&&Object(u["default"])(d);t["default"]=d.exports}}]);
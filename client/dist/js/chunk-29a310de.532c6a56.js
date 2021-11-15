(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29a310de"],{"24fd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.$store.state.isLoaded?a("el-container",{attrs:{direction:"vertical"}},[a("el-header",{attrs:{height:"60px"}},[a("h1",[e._v(e._s(e.$t("Add Access Key")))])]),e._v(" "),a("el-main",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("div",{staticClass:"common-form"},[a("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,rules:e.formRules}},[a("el-form-item",{attrs:{label:e.$t("Name"),prop:"name"}},[a("el-input",{attrs:{maxlength:"40","show-word-limit":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ID"}},[a("el-input",{attrs:{value:e.$t("Auto generate..."),disabled:!0}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Secret"}},[a("el-input",{attrs:{value:e.$t("Auto generate..."),disabled:!0}})],1),e._v(" "),a("el-form-item",[a("div",{staticClass:"setup-right"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Save")))])],1)])],1)],1)]),e._v(" "),a("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1):e._e()],1)},n=[],s=a("1da1"),o=(a("d3b7"),a("159b"),a("b64b"),a("96cf"),{name:"AccessKeySetup",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:e.t0=a.T.pageMode(),e.next="add"===e.t0?5:8;break;case 5:return a.T.jsonClear(a.form),a.data={},e.abrupt("break",8);case 8:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("setup"!==e.T.pageMode()){t.next=10;break}return t.next=3,e.T.callAPI_getOne("/api/v1/access-keys/do/list",e.$route.params.id);case 3:if(a=t.sent,a.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=a.data,r={},Object.keys(e.form).forEach((function(t){return r[t]=e.data[t]})),e.form=r;case 10:e.$store.commit("updateLoadStatus",!0);case 11:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:t.t1=e.T.pageMode(),t.next="add"===t.t1?11:14;break;case 11:return t.next=13,e.addData();case 13:return t.abrupt("return",t.sent);case 14:case"end":return t.stop()}}),t,null,[[0,5]])})))()},addData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.callAPI("post","/api/v1/access-keys/do/add",{body:{data:e.T.jsonCopy(e.form)},alert:{okMessage:e.$t("Access Key created")}});case 2:if(a=t.sent,a.ok){t.next=5;break}return t.abrupt("return");case 5:e.$router.push({name:"access-key-list",query:e.T.getPrevQuery()});case 6:case"end":return t.stop()}}),t)})))()}},computed:{formRules:function(){return{name:[{trigger:"change",message:this.$t("Please input name"),required:!0}]}}},props:{},data:function(){return{data:{},form:{name:null}}}}),c=o,u=a("2877"),i=a("a256"),l=Object(u["a"])(c,r,n,!1,null,"3e38d98e",null);"function"===typeof i["default"]&&Object(i["default"])(l);t["default"]=l.exports},"404a":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Add Access Key":"添加 Access Key","Auto generate...":"自动生成...","Please input name":"请输入名称","Access Key created":"Access Key 已创建"}}'),delete e.options._Ctor}},a256:function(e,t,a){"use strict";var r=a("404a"),n=a.n(r);t["default"]=n.a}}]);
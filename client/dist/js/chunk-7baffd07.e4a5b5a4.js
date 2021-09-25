(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7baffd07"],{"405d":function(e,t,a){"use strict";a("b1cb")},"6e4d":function(e,t,a){"use strict";var r=a("7beb"),i=a.n(r);t["default"]=i.a},"7beb":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Add API Auth":"添加API认证","Setup API Auth":"配置API认证","Auth Type":"认证类型","Auth Config":"认证配置","Func":"认证函数","Note":"备注","Fixed Fields":"固定字段","Add Fixed Field":"添加固定字段","Field Name":"字段名","Field Value":"字段值","HTTP Auth":"HTTP认证","Add HTTP Auth":"添加HTTP认证","Username":"用户名","Password (leave blank when not changing)":"密码（不修改时请留空）","Please select Func":"请选择认证函数","API Auth created":"API认证已创建","API Auth saved":"API认证已保存","API Auth deleted":"API认证已删除","Are you sure you want to delete the API Auth?":"是否确认删除此API认证？"}}'),delete e.options._Ctor}},a434:function(e,t,a){"use strict";var r=a("23e7"),i=a("23cb"),n=a("a691"),s=a("50c4"),o=a("7b0b"),l=a("65f0"),u=a("8418"),c=a("1dde"),d=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!c("splice")},{splice:function(e,t){var a,r,c,h,g,A,v=o(this),_=s(v.length),T=i(e,_),b=arguments.length;if(0===b?a=r=0:1===b?(a=0,r=_-T):(a=b-2,r=f(d(n(t),0),_-T)),_+a-r>p)throw TypeError(m);for(c=l(v,r),h=0;h<r;h++)g=T+h,g in v&&u(c,h,v[g]);if(c.length=r,a<r){for(h=T;h<_-r;h++)g=h+r,A=h+a,g in v?v[A]=v[g]:delete v[A];for(h=_;h>_-r+a;h--)delete v[h-1]}else if(a>r)for(h=_-r;h>T;h--)g=h+r-1,A=h+a-1,g in v?v[A]=v[g]:delete v[A];for(h=0;h<a;h++)v[h+T]=arguments[h+2];return v.length=_-r+a,c}})},b1cb:function(e,t,a){},f238:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.$store.state.isLoaded?a("el-container",{attrs:{direction:"vertical"}},[a("el-header",{attrs:{height:"60px"}},[a("h1",[e._v(e._s(e.pageTitle)+" "),e.data.name?a("code",{staticClass:"text-main"},[e._v(e._s(e.data.name||e.C.API_AUTH_MAP.get(e.selectedType).name))]):e._e()])]),e._v(" "),a("el-main",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("div",{staticClass:"common-form"},[a("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,rules:e.formRules}},["add"===e.T.pageMode()?a("el-form-item",{attrs:{label:e.$t("Auth Type"),prop:"type"}},[a("el-select",{on:{change:e.switchType},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.C.API_AUTH,(function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),1)],1):a("el-form-item",{attrs:{label:e.$t("Auth Type")}},[a("el-select",{attrs:{disabled:!0},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},[a("el-option",{attrs:{label:e.C.API_AUTH_MAP.get(e.selectedType).name,value:e.selectedType}})],1)],1),e._v(" "),e.selectedType?[e.C.API_AUTH_MAP.get(e.selectedType).tips?a("el-form-item",[a("InfoBlock",{attrs:{type:"info",title:e.C.API_AUTH_MAP.get(e.selectedType).tips}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:e.$t("Name")}},[a("el-input",{attrs:{placeholder:e.$t("Optional"),maxlength:"25","show-word-limit":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),e.hasConfigField(e.selectedType,"fixedFields")?a("el-form-item",{staticClass:"config-divider",attrs:{label:e.$t("Fixed Fields")}},[a("el-divider")],1):e._e(),e._v(" "),e._l(e.form.configJSON.fixedFields||[],(function(t,r){return[e.hasConfigField(e.selectedType,"fixedFields")?a("el-form-item",{key:"fieldLocation-"+r,staticClass:"fixed-field-location",attrs:{label:"#"+(r+1),prop:"configJSON.fixedFields."+r+".location",rules:e.formRules_fixedFieldLocation}},[a("el-select",{model:{value:t.location,callback:function(a){e.$set(t,"location",a)},expression:"fixedField.location"}},e._l(e.C.API_AUTH_FIXED_FIELD_LOCATION,(function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),1),e._v(" "),a("el-link",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.removeFixedFieldItem(r)}}},[e._v(e._s(e.$t("Delete")))])],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"fixedFields")?a("el-form-item",{key:"fieldName-"+r,staticClass:"fixed-field",attrs:{prop:"configJSON.fixedFields."+r+".name",rules:e.formRules_fixedFieldName}},[a("el-input",{attrs:{placeholder:e.$t("Field Name")},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"fixedField.name"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"fixedFields")?a("el-form-item",{key:"fieldValue-"+r,staticClass:"fixed-field",attrs:{prop:"configJSON.fixedFields."+r+".value",rules:e.formRules_fixedFieldValue}},[a("el-input",{attrs:{placeholder:e.$t("Field Value")},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"fixedField.value"}})],1):e._e()]})),e._v(" "),e.hasConfigField(e.selectedType,"fixedFields")?a("el-form-item",[a("el-link",{attrs:{type:"primary"},on:{click:e.addFixedFieldItem}},[a("i",{staticClass:"fa fa-fw fa-plus"}),e._v(" "+e._s(e.$t("Add Fixed Field")))])],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"httpAuth")?a("el-form-item",{staticClass:"config-divider",attrs:{label:e.$t("HTTP Auth")}},[a("el-divider")],1):e._e(),e._v(" "),e._l(e.form.configJSON.httpAuth||[],(function(t,r){return[e.hasConfigField(e.selectedType,"httpAuth")?a("el-form-item",{key:"username-"+r,staticClass:"http-auth",attrs:{label:"#"+(r+1),prop:"configJSON.httpAuth."+r+".username",rules:e.formRules_httpAuthUsername}},[a("el-input",{attrs:{placeholder:e.$t("Username")},model:{value:t.username,callback:function(a){e.$set(t,"username",a)},expression:"httpAuth.username"}}),e._v(" "),a("el-link",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.removeHTTPAuthItem(r)}}},[e._v(e._s(e.$t("Delete")))])],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"httpAuth")?a("el-form-item",{key:"password-"+r,staticClass:"http-auth",attrs:{prop:"configJSON.httpAuth."+r+".password",rules:e.formRules_httpAuthPassword}},[a("el-input",{attrs:{placeholder:e.$t("Password (leave blank when not changing)")},model:{value:t.password,callback:function(a){e.$set(t,"password",a)},expression:"httpAuth.password"}})],1):e._e()]})),e._v(" "),e.hasConfigField(e.selectedType,"httpAuth")?a("el-form-item",[a("el-link",{attrs:{type:"primary"},on:{click:e.addHTTPAuthItem}},[a("i",{staticClass:"fa fa-fw fa-plus"}),e._v(" "+e._s(e.$t("Add HTTP Auth")))])],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:e.$t("Func"),prop:"configJSON.funcId"}},[a("el-cascader",{ref:"funcCascader",staticClass:"func-cascader-input",attrs:{placeholder:"--",filterable:"",options:e.funcCascader,props:{expandTrigger:"hover",emitPath:!1,multiple:!1}},model:{value:e.form.configJSON.funcId,callback:function(t){e.$set(e.form.configJSON,"funcId",t)},expression:"form.configJSON.funcId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("Note")}},[a("el-input",{attrs:{placeholder:e.$t("Optional"),type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"200","show-word-limit":""},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1)]:e._e(),e._v(" "),a("el-form-item",["setup"===e.T.pageMode()?a("el-button",{on:{click:e.deleteData}},[e._v(e._s(e.$t("Delete")))]):e._e(),e._v(" "),a("div",{staticClass:"setup-right"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Save")))])],1)],1)],2)],1)]),e._v(" "),a("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1):e._e()],1)},i=[],n=a("1da1"),s=(a("159b"),a("b64b"),a("d81d"),a("a434"),a("96cf"),{name:"APIAuthSetup",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:e.t0=a.T.pageMode(),e.next="add"===e.t0?5:"setup"===e.t0?9:10;break;case 5:return a.T.jsonClear(a.form),a.form.configJSON={},a.data={},e.abrupt("break",10);case 9:return e.abrupt("break",10);case 10:case"end":return e.stop()}}),e)})))()}}},methods:{updateValidator:function(e){this.$refs.form&&this.$refs.form.clearValidate();var t=this.C.API_AUTH_MAP.get(e).configFields;if(t)for(var a in t)if(t.hasOwnProperty(a)){var r=t[a];if(!r)continue;var i=this.formRules["configJSON.".concat(a)];i&&(i[0].required=!!r.isRequired)}},fillDefault:function(e){var t=this.C.API_AUTH_MAP.get(e).configFields;if(t){var a={};for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(!i)continue;this.T.isNothing(i.default)||(a[r]=i.default)}this.form.configJSON=a}},switchType:function(e){this.fillDefault(e),this.updateValidator(e)},loadData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("setup"!==e.T.pageMode()){t.next=11;break}return t.next=3,e.T.callAPI_getOne("/api/v1/api-auth/do/list",e.$route.params.id);case 3:if(a=t.sent,a.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=a.data,r={},Object.keys(e.form).forEach((function(t){return r[t]=e.data[t]})),e.form=r,e.updateValidator(e.data.type);case 11:return t.next=13,e.common.getFuncList();case 13:i=t.sent,e.funcMap=i.map,e.funcCascader=i.cascader,e.$store.commit("updateLoadStatus",!0);case 17:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:t.t1=e.T.pageMode(),t.next="add"===t.t1?11:"setup"===t.t1?14:17;break;case 11:return t.next=13,e.addData();case 13:return t.abrupt("return",t.sent);case 14:return t.next=16,e.modifyData();case 16:return t.abrupt("return",t.sent);case 17:case"end":return t.stop()}}),t,null,[[0,5]])})))()},_getFromData:function(){var e=this.T.jsonCopy(this.form);if(e.configJSON)for(var t in e.configJSON)this.T.isNothing(e.configJSON[t])&&(e.configJSON[t]=null);return e},addData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e._getFromData(),t.next=3,e.T.callAPI("post","/api/v1/api-auth/do/add",{body:{data:a},alert:{okMessage:e.$t("API Auth created")}});case 3:if(r=t.sent,r.ok){t.next=6;break}return t.abrupt("return");case 6:e.$store.commit("updateAuthLinkList_scrollY",null),e.$store.commit("updateHighlightedTableDataId",r.data.id),e.$router.push({name:"api-auth-list",query:e.T.getPrevQuery()});case 9:case"end":return t.stop()}}),t)})))()},modifyData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e._getFromData(),delete a.id,delete a.type,t.next=5,e.T.callAPI("post","/api/v1/api-auth/:id/do/modify",{params:{id:e.$route.params.id},body:{data:a},alert:{okMessage:e.$t("API Auth saved")}});case 5:if(r=t.sent,r.ok){t.next=8;break}return t.abrupt("return");case 8:e.$store.commit("updateHighlightedTableDataId",r.data.id),e.$router.push({name:"api-auth-list",query:e.T.getPrevQuery()});case 10:case"end":return t.stop()}}),t)})))()},deleteData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.confirm(e.$t("Are you sure you want to delete the API Auth?"));case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.T.callAPI("/api/v1/api-auth/:id/do/delete",{params:{id:e.$route.params.id},alert:{okMessage:e.$t("API Auth deleted")}});case 6:if(a=t.sent,a.ok){t.next=9;break}return t.abrupt("return");case 9:e.$router.push({name:"api-auth-list",query:e.T.getPrevQuery()});case 10:case"end":return t.stop()}}),t)})))()},hasConfigField:function(e,t){return!(!this.C.API_AUTH_MAP.get(e)||!this.C.API_AUTH_MAP.get(e).configFields)&&t in this.C.API_AUTH_MAP.get(e).configFields},addFixedFieldItem:function(){this.T.isNothing(this.form.configJSON.fixedFields)&&this.$set(this.form.configJSON,"fixedFields",[]),this.form.configJSON.fixedFields.push({location:"",name:"",value:""})},removeFixedFieldItem:function(e){this.form.configJSON.fixedFields.splice(e,1)},addHTTPAuthItem:function(){this.T.isNothing(this.form.configJSON.httpAuth)&&this.$set(this.form.configJSON,"httpAuth",[]),this.form.configJSON.httpAuth.push({username:"",password:""})},removeHTTPAuthItem:function(e){this.form.configJSON.httpAuth.splice(e,1)}},computed:{formRules:function(){return{type:[{trigger:"change",message:this.$t("Please input API Auth type"),required:!0}],funcId:[{trigger:"change",message:this.$t("Please select Func"),required:!0}]}},formRules_fixedFieldLocation:function(){return{trigger:"change",message:this.$t("Please input location"),required:!0}},formRules_fixedFieldName:function(){return{trigger:"change",message:this.$t("Please input field name"),required:!0}},formRules_fixedFieldValue:function(){return{trigger:"change",message:this.$t("Please input field value"),required:!0}},formRules_httpAuthUsername:function(){return{trigger:"change",message:this.$t("Please input HTTP Auth username"),required:!0}},formRules_httpAuthPassword:function(){return{trigger:"change",message:this.$t("Please input HTTP Auth password"),required:!1}},pageTitle:function(){var e={setup:this.$t("Setup API Auth"),add:this.$t("Add API Auth")};return e[this.T.pageMode()]},selectedType:function(){switch(this.T.pageMode()){case"add":return this.form.type;case"setup":return this.data.type}}},props:{},data:function(){return{data:{},funcMap:{},funcCascader:[],form:{name:null,type:null,configJSON:{},note:null}}}}),o=s,l=(a("405d"),a("2877")),u=a("6e4d"),c=Object(l["a"])(o,r,i,!1,null,"f4bd3d72",null);"function"===typeof u["default"]&&Object(u["default"])(c);t["default"]=c.exports}}]);
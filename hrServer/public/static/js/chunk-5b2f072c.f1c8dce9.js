(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b2f072c"],{"01f5":function(e,t,r){"use strict";t["a"]={hireType:[{id:1,value:"正式"},{id:2,value:"非正式"}],subjection:[{id:"1",value:"总部"},{id:"2",value:"分城市"}],workingState:[{id:"1",value:"在职"},{id:"2",value:"离职"}],leaveType:[{id:"1",value:"主动离职"},{id:"2",value:"被动离职"},{id:"3",value:"退休"}],attritionMonth:[{id:"1",value:"离职日本月"},{id:"2",value:"离职日次月"}],informaltype:[{id:"2",value:"实习"},{id:"3",value:"劳务"},{id:"4",value:"顾问"},{id:"5",value:"返聘"},{id:"6",value:"外包"}],highestDegree:[{id:"1",value:"初中"},{id:"2",value:"高中"},{id:"3",value:"中专"},{id:"4",value:"大专"},{id:"5",value:"本科"},{id:"6",value:"硕士"},{id:"7",value:"博士"},{id:"8",value:"其他"}],isOverseas:[{id:"1",value:"中国大陆"},{id:"2",value:"港澳台国外"}],gender:[{id:"1",value:"男"},{id:"2",value:"女"}],maritaStatus:[{id:"1",value:"未婚"},{id:"2",value:"已婚"},{id:"3",value:"离异"}],animalSymbol:[{id:"1",value:"鼠"},{id:"2",value:"牛"},{id:"3",value:"虎"},{id:"4",value:"兔"},{id:"5",value:"龙"},{id:"6",value:"蛇"},{id:"7",value:"马"},{id:"8",value:"羊"},{id:"9",value:"猴"},{id:"10",value:"鸡"},{id:"11",value:"狗"},{id:"12",value:"猪"}],constellation:[{code:1,value:"水瓶座"},{code:2,value:"双鱼座"},{code:3,value:"白羊座"},{code:4,value:"金牛座"},{code:5,value:"双子座"},{code:6,value:"巨蟹座"},{code:7,value:"狮子座"},{code:8,value:"处女座"},{code:9,value:"天秤座"},{code:10,value:"天蝎座"},{code:11,value:"射手座"},{code:12,value:"摩羯座"}],bloodType:[{id:"1",value:"A型"},{id:"2",value:"B型"},{id:"3",value:"O型"},{id:"4",value:"AB型"}],educationType:[{id:"1",value:"统招"},{id:"2",value:"自考"},{id:"3",value:"成考"}],positiveType:[{id:"1",value:"已转正"},{id:"2",value:"未转正"}],contractPeriod:[{id:"1",value:"6月"},{id:"2",value:"12月"},{id:"3",value:"24月"},{id:"4",value:"36月"},{id:"5",value:"其他"}],renewalCount:[{id:1,value:"0次"},{id:2,value:"1次"},{id:3,value:"2次"},{id:4,value:"3次"},{id:5,value:"4次或以上"}],resumeSource:[{id:"1",value:"智联招聘"},{id:"2",value:"拉勾网"},{id:"3",value:"前程无忧"},{id:"4",value:"猎聘网"},{id:"5",value:"校园宣讲"},{id:"6",value:"猎头"},{id:"7",value:"内部推荐"}],hireSourceType:[{id:"1",value:"社招"},{id:"2",value:"校招"}],departments:[{id:"1",value:"总裁办"},{id:"2",value:"研究院"}],stausInfos:[{id:"1",value:"在职"},{id:"2",value:"入职"},{id:"3",value:"离职"}]}},"0b62":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("page-tools",{attrs:{"show-before":""}},[a("span",{attrs:{slot:"before"},slot:"before"},[e._v("共"+e._s(e.page.total)+"条记录")]),a("template",{slot:"after"},[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.exportData}},[e._v("简单表头导出")]),a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(t){return e.exportData(!0)}}},[e._v("复杂表头导出")]),a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){return e.$router.push("/import")}}},[e._v("excel导入")]),a("el-button",{attrs:{size:"small",disabled:!e.checkPermission("add-user"),type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("新增员工")])],1)],2),a("el-card",[a("el-table",{attrs:{data:e.list}},[a("el-table-column",{attrs:{label:"序号",sortable:"",type:"index"}}),a("el-table-column",{attrs:{label:"姓名",sortable:"",prop:"username"}}),a("el-table-column",{attrs:{label:"头像"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("img",{directives:[{name:"imagerror",rawName:"v-imagerror",value:r("bae5"),expression:"require('@/assets/common/bigUserHeader.png')"}],staticStyle:{width:"100px",height:"100px"},attrs:{src:n.staffPhoto,alt:""},on:{click:function(t){return e.showQrCode(n.staffPhoto)}}})]}}])}),a("el-table-column",{attrs:{label:"手机号",sortable:"",prop:"mobile"}}),a("el-table-column",{attrs:{label:"工号",sortable:"",prop:"workNumber"}}),a("el-table-column",{attrs:{label:"聘用形式",sortable:"",prop:"formOfEmployment",formatter:e.formatEmployment}}),a("el-table-column",{attrs:{label:"部门",sortable:"",prop:"departmentName"}}),a("el-table-column",{attrs:{label:"入职时间",sortable:"",prop:"timeOfEntry"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(e._f("formatDate")(r.timeOfEntry,"yyyy/MM/dd"))+" ")]}}])}),a("el-table-column",{attrs:{label:"账户状态",sortable:"",prop:"enableState"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-switch",{attrs:{value:1===t.enableState}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return e.$router.push("/employees/detail/"+r.id)}}},[e._v("查看")]),a("el-button",{attrs:{size:"small",type:"text"}},[e._v("转正")]),a("el-button",{attrs:{size:"small",type:"text"}},[e._v("调岗")]),a("el-button",{attrs:{size:"small",type:"text"}},[e._v("离职")]),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return e.editRole(r.id)}}},[e._v("角色")]),a("el-button",{attrs:{disabled:!e.checkPermission("del-user"),size:"small",type:"text"},on:{click:function(t){return e.deleteEmployee(r.id)}}},[e._v("删除")])]}}])})],1),a("el-row",{staticStyle:{height:"80px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-pagination",{attrs:{total:e.page.total,"current-page":e.page.page,"page-size":e.page.size,background:"",layout:"prev,pager,next"},on:{"current-change":e.changePage}})],1)],1)],1),a("add-employee",{attrs:{"show-dialog":e.showDialog},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t}}}),a("assign-role",{ref:"assignRole",attrs:{"show-role-dialog":e.showRoleDialog,"user-id":e.userId},on:{"update:showRoleDialog":function(t){e.showRoleDialog=t},"update:show-role-dialog":function(t){e.showRoleDialog=t}}}),a("el-dialog",{attrs:{title:"扫码预览",visible:e.showCodeDialog},on:{"update:visible":function(t){e.showCodeDialog=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("canvas",{ref:"myCanvas"})])],1)],1)},n=[],o=r("1da1"),l=(r("96cf"),r("d3b7"),r("7db0"),r("3ca3"),r("ddb0"),r("b64b"),r("d81d"),r("07ac"),r("8f00")),i=r("01f5"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"新增员工",visible:e.showDialog},on:{close:e.btnCancel},scopedSlots:e._u([{key:"footer",fn:function(){return[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")])],1)],1)]},proxy:!0}])},[r("el-form",{ref:"addEmployee",attrs:{model:e.formData,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"username"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入姓名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入手机号"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),r("el-form-item",{attrs:{label:"入职时间",prop:"timeOfEntry"}},[r("el-date-picker",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择日期"},model:{value:e.formData.timeOfEntry,callback:function(t){e.$set(e.formData,"timeOfEntry",t)},expression:"formData.timeOfEntry"}})],1),r("el-form-item",{attrs:{label:"聘用形式",prop:"formOfEmployment"}},[r("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择"},model:{value:e.formData.formOfEmployment,callback:function(t){e.$set(e.formData,"formOfEmployment",t)},expression:"formData.formOfEmployment"}},e._l(e.EmployeeEnum.hireType,(function(e){return r("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入工号"},model:{value:e.formData.workNumber,callback:function(t){e.$set(e.formData,"workNumber",t)},expression:"formData.workNumber"}})],1),r("el-form-item",{attrs:{label:"部门",prop:"departmentName"}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择部门"},on:{focus:e.getDepartments},model:{value:e.formData.departmentName,callback:function(t){e.$set(e.formData,"departmentName",t)},expression:"formData.departmentName"}}),e.showTree?r("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.treeData,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.selectNode}}):e._e()],1),r("el-form-item",{attrs:{label:"转正时间",prop:"correctionTime"}},[r("el-date-picker",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择日期"},model:{value:e.formData.correctionTime,callback:function(t){e.$set(e.formData,"correctionTime",t)},expression:"formData.correctionTime"}})],1)],1)],1)},s=[],c=(r("b0c0"),r("1eef")),d=r("ed08"),m={props:{showDialog:{type:Boolean,default:!1}},data:function(){return{EmployeeEnum:i["a"],formData:{username:"",mobile:"",formOfEmployment:"",workNumber:"",departmentName:"",timeOfEntry:"",correctionTime:""},rules:{username:[{required:!0,message:"用户姓名不能为空",trigger:"blur"},{min:1,max:4,message:"用户姓名为1-4位"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],formOfEmployment:[{required:!0,message:"聘用形式不能为空",trigger:"blur"}],workNumber:[{required:!0,message:"工号不能为空",trigger:"blur"}],departmentName:[{required:!0,message:"部门不能为空",trigger:"change"}],timeOfEntry:[{required:!0,message:"入职时间",trigger:"blur"}]},treeData:[],showTree:!1,defaultProps:{label:"name"},loading:!1}},methods:{getDepartments:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showTree=!0,e.loading=!0,t.next=4,Object(c["d"])();case 4:return r=t.sent,a=r.depts,e.treeData=Object(d["a"])(a,""),t.next=9,e.$sleep(300);case 9:e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},selectNode:function(e){this.formData.departmentName=e.name,this.showTree=!1},btnCancel:function(){this.formData={username:"",mobile:"",formOfEmployment:"",workNumber:"",departmentName:"",timeOfEntry:"",correctionTime:""},this.$refs.addEmployee.resetFields(),this.$emit("update:showDialog",!1)},btnOK:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.addEmployee.validate();case 3:return t.next=5,Object(l["a"])(e.formData);case 5:e.$parent.showDialog=!1,e.$parent.getEmployeeList(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},f=m,p=r("2877"),b=Object(p["a"])(f,u,s,!1,null,null,null),v=b.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"分配角色",visible:e.showRoleDialog},on:{close:e.btnCancel}},[r("el-checkbox-group",{model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}},e._l(e.list,(function(t){return r("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1),r("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")]),r("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")])],1)],1)],1)},g=[],y=r("90e7"),w=r("c24f"),O={props:{showRoleDialog:{type:Boolean,default:!1},userId:{type:String,default:null}},data:function(){return{list:[],roleIds:[]}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["f"])();case 2:r=t.sent,a=r.rows,e.list=a;case 5:case"end":return t.stop()}}),t)})))()},getUserDetailById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(w["a"])(e);case 2:a=r.sent,n=a.roleIds,t.roleIds=n;case 5:case"end":return r.stop()}}),r)})))()},btnOK:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])({id:e.userId,roleIds:e.roleIds});case 2:e.$emit("update:showRoleDialog",!1);case 3:case"end":return t.stop()}}),t)})))()},btnCancel:function(){this.roleIds=[],this.$emit("update:showRoleDialog",!1)}}},x=O,k=Object(p["a"])(x,h,g,!1,null,null,null),D=k.exports,j=r("8975"),E=r("d055"),_=r.n(E),R={components:{AddEmployee:v,AssignRole:D},data:function(){return{EmployeeEnum:i["a"],page:{page:1,size:10,total:0},list:[],loading:!1,showDialog:!1,showCodeDialog:!1,showRoleDialog:!1,userId:null}},created:function(){this.getEmployeeList()},methods:{getEmployeeList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(l["d"])(e.page);case 3:return r=t.sent,a=r.total,n=r.rows,e.page.total=a,e.list=n,t.next=10,new Promise((function(e){return setTimeout((function(){return e()}),300)}));case 10:e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},changePage:function(e){this.page.page=e,this.getEmployeeList()},formatEmployment:function(e,t,r,a){var n=this.EmployeeEnum.hireType.find((function(e){return e.id+""===r+""}));return n?n.value:"未知"},deleteEmployee:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$confirm("您确定删除该员工吗");case 3:return r.next=5,Object(l["c"])(e);case 5:t.getEmployeeList(),t.$message.success("删除员工成功"),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},exportData:function(e){var t=this,a={"姓名":"username","手机":"mobile","入职日期":"timeOfEntry","聘用形式":"formOfEmployment","转正日期":"correctionTime","工号":"workNumber","部门":"departmentName"};Promise.all([r.e("chunk-519483dc"),r.e("chunk-09290bef")]).then(r.bind(null,"4bf8")).then(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(n){var o,i,u,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["d"])({page:1,size:t.page.total});case 2:o=r.sent,i=o.rows,u=t.formatJson(a,i),s=e?[["姓名","主要信息","","","","","部门"]]:[],c=e?["A1:A2","B1:F1","G1:G2"]:[],n.export_json_to_excel({header:Object.keys(a),multiHeader:s,data:u,merges:c,filename:"ihrm人力资源用户表",autoWidth:!0,bookType:"xlsx"});case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},formatJson:function(e,t){var r=this;return t.map((function(t){return Object.values(e).map((function(e){if("formOfEmployment"===e){var a=r.EmployeeEnum.hireType.find((function(r){return r.id+""===t[e]+""}));return a?a.value:"未知"}return"timeOfEntry"===e||"correctionTime"===e?Object(j["formatDate"])(t[e]):t[e]}))}))},showQrCode:function(e){var t=this;e?(this.showCodeDialog=!0,this.$nextTick((function(){return _.a.toCanvas(t.$refs.myCanvas,e)}))):this.$message.warning("你还未上传头像")},editRole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userId=e,r.next=3,t.$refs.assignRole.getUserDetailById(e);case 3:t.showRoleDialog=!0;case 4:case"end":return r.stop()}}),r)})))()}}},$=R,N=Object(p["a"])($,a,n,!1,null,null,null);t["default"]=N.exports},"1eef":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return u}));var a=r("b775");function n(){return Object(a["a"])({url:"/company/department"})}function o(e){return Object(a["a"])({method:"delete",url:"/company/department/".concat(e)})}function l(e){return Object(a["a"])({url:"/company/department",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/company/department/".concat(e)})}function u(e){return Object(a["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"8f00":function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"h",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"k",(function(){return d})),r.d(t,"f",(function(){return m})),r.d(t,"j",(function(){return f})),r.d(t,"b",(function(){return p}));var a=r("b775");function n(){return Object(a["a"])({url:"/sys/user/simple"})}function o(e){return Object(a["a"])({url:"/sys/user",params:e})}function l(e){return Object(a["a"])({url:"/sys/user/".concat(e),method:"delete"})}function i(e){return Object(a["a"])({url:"/sys/user",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/sys/user/batch",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function c(e){return Object(a["a"])({url:"/employees/".concat(e,"/personalInfo")})}function d(e){return Object(a["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function m(e){return Object(a["a"])({url:"/employees/".concat(e,"/jobs")})}function f(e){return Object(a["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function p(e){return Object(a["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},"90e7":function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"g",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var a=r("b775");function n(e){return Object(a["a"])({url:"/sys/role",params:e})}function o(e){return Object(a["a"])({url:"/company/".concat(e)})}function l(e){return Object(a["a"])({url:"/sys/role/".concat(e),method:"delete"})}function i(e){return Object(a["a"])({url:"/sys/role/".concat(e.id),data:e,method:"put"})}function u(e){return Object(a["a"])({url:"/sys/role/".concat(e)})}function s(e){return Object(a["a"])({url:"/sys/role",data:e,method:"post"})}function c(e){return Object(a["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},bae5:function(e,t,r){e.exports=r.p+"static/img/bigUserHeader.fda3837f.png"},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("53ca"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("2c3e"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function a(e,t){var r=[];return e.forEach((function(n){if(n.pid===t){var o=a(e,n.id);o.length&&(n.children=o),r.push(n)}})),r}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1388"],{"44b4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.beginReset?n("el-alert",{attrs:{title:e.count+"秒后开始重置数据",type:"warning",closable:!1}}):e._e(),n("el-row",{staticStyle:{height:"600px"},attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-button",{staticStyle:{width:"200px",height:"200px","font-size":"26px"},attrs:{type:"primary",circle:""},on:{click:e.resetData}},[e._v("重置人资数据")])],1)],1)},i=[],a=n("1da1"),s=(n("96cf"),n("d3b7"),n("5f72")),c=n("b775"),u={data:function(){return{count:5,beginReset:!1}},methods:{resetData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.beginReset){t.next=2;break}return t.abrupt("return");case 2:return e.timeCut(),t.next=5,new Promise((function(){return setTimeout(Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=s["Loading"].service({text:"数据正在重置"}),t.next=3,Object(c["a"])({url:"/reset",method:"post"});case 3:e.beginReset=!1,e.count=5,n.close(),e.$message.success("数据重置成功");case 7:case"end":return t.stop()}}),t)}))),5e3)}));case 5:case"end":return t.stop()}}),t)})))()},timeCut:function(){var e=this;this.beginReset=!0,this.count--,this.timer=setInterval((function(){0!==e.count?e.count--:clearInterval(e.timer)}),1e3)}}},o=u,l=n("2877"),p=Object(l["a"])(o,r,i,!1,null,null,null);t["default"]=p.exports}}]);
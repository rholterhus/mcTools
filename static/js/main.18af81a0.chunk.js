(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(e,t,n){},70:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(8),r=n.n(i),s=(n(68),n(17)),l=n.n(s),o=n(51),u=n(38),j=n(33),d=(n(70),n(126)),h=n(117),b=n(110),p=n(119),x=n(123),O=n(128),f=n(124),m=n(125),g=n(122),w=n(118),v=n(120),y=n(121),k=n(116),C=n(5),N=Object(b.a)((function(e){return{title:{margin:e.spacing(1)},topRow:{display:"flex",height:"75px",justifyContent:"center",alignItems:"center"},middleRow:{display:"flex",height:"75px",justifyContent:"center",alignItems:"center"},modalMain:{backgroundColor:"rgb(0,0,0,0.25)",display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",pointerEvents:"none"},modalContent:{backgroundColor:"white",display:"flex",height:"250px",width:"250px",justifyContent:"center",alignItems:"center",pointerEvents:"auto",flexDirection:"column"},horizontalLine:{height:"1px",width:"100%",backgroundColor:"black",margin:"20px 20px 20px 20px"},input:{margin:e.spacing(1)},button:{fontSize:8,margin:e.spacing(1),backgroundColor:"blue",color:"white","&:hover":{backgroundColor:"black"}},info:{width:"100%",display:"flex",justifyContent:"center"},tableContainer:{width:"80%"}}}));var I=function(){var e=N(),t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),s=Object(j.a)(r,2),b=s[0],I=s[1],S=Object(c.useState)(""),L=Object(j.a)(S,2),R=L[0],T=L[1],P=Object(c.useState)("t2.large"),z=Object(j.a)(P,2),A=z[0],M=z[1],B=Object(c.useState)("us-east-2"),F=Object(j.a)(B,2),D=F[0],E=F[1];function G(e,t){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(l.a.mark((function e(t,n){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(o.a)({accessKeyId:"AKIA4HDL62RVEJ4ZNRSW",secretAccessKey:a},n))},e.next=3,fetch("https://minecraftbackend.herokuapp.com/".concat(t),c);case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("instances",{});case 2:return t=e.sent,e.t0=T,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=Object.keys(R).length){e.next=4;break}return e.next=3,G("start-mc",{instanceType:A,instanceLocation:D});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(t,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("terminate",{instance_id:t,instance_ip:n});case 2:c=e.sent,console.log(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("div",{className:e.title,children:"Riley/Aquinn Minecraft Server Tool Website"}),Object(C.jsx)("div",{className:e.topRow,children:Object(C.jsx)(d.a,{size:"small",className:e.input,id:"outlined-basic",label:"SecretKey",variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(e){return i(e.target.value)}})}),Object(C.jsx)(h.a,{size:"small",className:e.button,onClick:function(){return function(){return K.apply(this,arguments)}()},children:"Get/Refresh"}),R?Object(C.jsxs)(C.Fragment,{children:[0===Object.keys(R).length?Object(C.jsxs)("div",{className:e.middleRow,children:[Object(C.jsx)(h.a,{size:"small",className:e.button,onClick:function(){return I(!0)},children:"Instance Options"}),Object(C.jsx)(h.a,{size:"small",className:e.button,onClick:function(){return function(){return W.apply(this,arguments)}()},children:"Launch New Instance"}),Object(C.jsx)(m.a,{keepMounted:!0,open:b,onClose:function(){return I(!1)},children:Object(C.jsx)("div",{className:e.modalMain,children:Object(C.jsxs)("div",{className:e.modalContent,children:[Object(C.jsx)("strong",{children:"Instance Type"}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(f.a,{value:A,onChange:function(e){return M(e.target.value)},children:[Object(C.jsx)(O.a,{value:"t2.xlarge",children:"t2.xlarge (16 GB RAM)"}),Object(C.jsx)(O.a,{value:"t2.large",children:"t2.large (8 GB RAM)"}),Object(C.jsx)(O.a,{value:"t2.medium",children:"t2.medium (4 GB RAM)"})]})}),Object(C.jsx)("div",{className:e.horizontalLine}),Object(C.jsx)("strong",{children:"Instance Location"}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(f.a,{value:D,onChange:function(e){return E(e.target.value)},children:[Object(C.jsx)(O.a,{value:"us-east-2",children:"Ohio"}),Object(C.jsx)(O.a,{value:"eu-west-3",children:"Paris"})]})})]})})})]}):null,Object(C.jsx)("div",{className:e.info,children:Object(C.jsx)(w.a,{className:e.tableContainer,component:k.a,children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)(v.a,{children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{width:"20%",children:"ID"}),Object(C.jsx)(g.a,{width:"20%",children:"IP"}),Object(C.jsx)(g.a,{width:"20%",children:"Launch Time"}),Object(C.jsx)(g.a,{width:"10%",children:"Type"}),Object(C.jsx)(g.a,{width:"15%",children:"Backup"}),Object(C.jsx)(g.a,{width:"15%",children:"Stop"})]})}),Object(C.jsx)(x.a,{children:Object.keys(R).map((function(t){return Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{width:"20%",children:t}),Object(C.jsx)(g.a,{width:"20%",children:R[t]["Public IP"]}),Object(C.jsx)(g.a,{width:"20%",children:R[t]["Launch Time"]}),Object(C.jsx)(g.a,{width:"10%",children:R[t].Type}),Object(C.jsx)(g.a,{width:"15%",children:Object(C.jsx)(h.a,{size:"large",className:e.button,onClick:function(){},children:"Backup"})}),Object(C.jsx)(g.a,{width:"15%",children:Object(C.jsx)(h.a,{size:"large",className:e.button,onClick:function(){return function(e,t){return _.apply(this,arguments)}(t,R[t]["Public IP"])},children:"Stop"})})]},t)}))})]})})})]}):null]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root")),S()}},[[75,1,2]]]);
//# sourceMappingURL=main.18af81a0.chunk.js.map
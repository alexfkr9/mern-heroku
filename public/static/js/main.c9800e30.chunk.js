(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{372:function(e,t,n){},438:function(e,t,n){},460:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(15),r=n.n(a),s=(n(372),n(92)),i=n(28),o=n(31),l=n.n(o),d=n(183),j=n(243),u=n(68),b=n(39),h=n(482),m=n(308),p=n(6),x=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),i=s[0],o=s[1],x=Object(c.useState)([]),O=Object(b.a)(x,2),f=O[0],v=O[1],y=Object(c.useState)([]),g=Object(b.a)(y,2),w=g[0],N=g[1],k=Object(c.useState)({name:"",quantity:""}),E=Object(b.a)(k,2),S=E[0],A=E[1];function T(){return(T=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:S.name,quantity:S.quantity})});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:n=e.sent,console.log(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/"+t,{method:"DELETE",headers:{Accept:"application/json"}});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:e.sent,console.log("User id)");case 8:console.log("User id)"),console.log(t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){fetch("/api/menu").then((function(e){return e.json()})).then((function(e){o(!0),v(e)}),(function(e){o(!0),a(e)}))}),[]),Object(c.useEffect)((function(){fetch("/api/user").then((function(e){return e.json()})).then((function(e){o(!0),N(e)}),(function(e){o(!0),a(e)}))}),[]);var F=function(e){!function(e){C.apply(this,arguments)}(e.target.id)},_=function(e){A(Object(j.a)(Object(j.a)({},S),{},Object(d.a)({},e.target.name,e.target.value)))};return n?Object(p.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",n.message]}):i?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{children:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438"}),Object(p.jsxs)("form",{name:"userForm",children:[Object(p.jsx)("input",{type:"hidden",name:"id",value:""}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),Object(p.jsx)("input",{className:"form-control",name:"name",value:S.name,onChange:_})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"cost",children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsx)("input",{className:"form-control",name:"cost",value:S.age})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"quantity",children:"\u041a\u043e\u043b-\u0432\u043e:"}),Object(p.jsx)("input",{className:"form-control",name:"quantity",value:S.quantity,onChange:_})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"measure",children:"\u0415\u0434.\u0438\u0437\u043c:"}),Object(p.jsx)("input",{className:"form-control",name:"measure",value:S.measure})]}),Object(p.jsx)("div",{className:"panel-body",children:Object(p.jsx)("button",{onClick:function(){return T.apply(this,arguments)},className:"btn btn-sm btn-primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(p.jsxs)(h.a,{container:!0,spacing:3,children:[Object(p.jsx)(h.a,{item:!0,xs:6,children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u0411\u043b\u044e\u0434\u043e"}),Object(p.jsx)("th",{children:"\u0426\u0435\u043d\u0430"}),Object(p.jsx)("th",{children:"\u0415\u0434.\u0438\u0437\u043c"})]})}),Object(p.jsx)("tbody",{children:f.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.age}),Object(p.jsx)("td",{children:e.measure})]},f._id)}))})]})}),Object(p.jsx)(h.a,{item:!0,xs:6,children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:w.map((function(e){return Object(p.jsx)("th",{children:e.name})}))})}),Object(p.jsx)("tbody",{children:Object(p.jsx)("tr",{children:w.map((function(e){return Object(p.jsxs)("td",{children:[e.quantity.map((function(e){return Object(p.jsx)("tr",{style:{height:55},children:e})})),Object(p.jsx)("tr",{children:Object(p.jsx)(m.a,{variant:"contained",color:"secondary",id:e._id,onClick:F,children:"Delete"})})]})}))})})]})})]})]}):Object(p.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})},O=function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/menu",{method:"GET",headers:{Accept:"application/json"}});case 2:if(!0!==(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:n=e.sent,console.log(n),c=document.querySelector("tbody"),n.forEach((function(e){c.append(s(e))}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/menu/"+t,{method:"GET",headers:{Accept:"application/json"}});case 2:if(!0!==(n=e.sent).ok){e.next=12;break}return e.next=6,n.json();case 6:c=e.sent,(a=document.forms.userForm).elements.id.value=c._id,a.elements.name.value=c.name,a.elements.age.value=c.age,a.elements.measure.value=c.measure;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(u.a)(l.a.mark((function e(t,n,c){var a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/menu",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,age:parseInt(n,10),measure:c})});case 2:if(!0!==(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:i=e.sent,r(),document.querySelector("tbody").append(s(i));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(u.a)(l.a.mark((function e(t,n,c,a){var i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/menu",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:t,name:n,age:parseInt(c,10),measure:a})});case 2:if(!0!==(i=e.sent).ok){e.next=9;break}return e.next=6,i.json();case 6:o=e.sent,r(),document.querySelector("tr[data-rowid='"+o._id+"']").replaceWith(s(o));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/menu/"+t,{method:"DELETE",headers:{Accept:"application/json"}});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:c=e.sent,document.querySelector("tr[data-rowid='"+c._id+"']").remove();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(e){e.preventDefault();var t=document.forms.userForm;t.reset(),t.elements.id.value=0}function s(e){var n=document.createElement("tr");n.setAttribute("data-rowid",e._id);var c=document.createElement("td");c.append(e._id),n.append(c);var r=document.createElement("td");r.append(e.name),n.append(r);var s=document.createElement("td");s.append(e.age),n.append(s);var i=document.createElement("td");i.append(e.measure),n.append(i);var o=document.createElement("td"),l=document.createElement("a");l.setAttribute("data-id",e._id),l.setAttribute("style","cursor:pointer;padding:15px;"),l.append("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),l.addEventListener("click",(function(n){n.preventDefault(),function(e){t.apply(this,arguments)}(e._id)})),o.append(l);var d=document.createElement("a");return d.setAttribute("data-id",e._id),d.setAttribute("style","cursor:pointer;padding:15px;"),d.append("\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),d.addEventListener("click",(function(t){t.preventDefault(),function(e){a.apply(this,arguments)}(e._id)})),o.append(d),n.appendChild(o),n}return function(){e.apply(this,arguments)}(),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h5",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u0435\u043d\u044e"}),Object(p.jsxs)("form",{name:"userForm",children:[Object(p.jsx)("input",{type:"hidden",name:"id",value:"0"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),Object(p.jsx)("input",{className:"form-control",name:"name"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"age",children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsx)("input",{className:"form-control",name:"age"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"measure",children:"\u0415\u0434.\u0438\u0437\u043c:"}),Object(p.jsx)("input",{className:"form-control",name:"measure"})]}),Object(p.jsxs)("div",{className:"panel-body",children:[Object(p.jsx)("button",{onClick:function(){var e=document.forms.userForm;console.log(e);var t=e.elements.id.value,a=e.elements.name.value,r=e.elements.age.value,s=e.elements.measure.value;0===t?function(e,t,c){n.apply(this,arguments)}(a,r,s):function(e,t,n,a){c.apply(this,arguments)}(t,a,r,s)},className:"btn btn-sm btn-primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(p.jsx)("a",{id:"reset",onClick:r,className:"btn btn-sm btn-primary",children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]})]}),Object(p.jsxs)("table",{className:"table table-condensed table-striped table-bordered",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Id"}),Object(p.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(p.jsx)("th",{children:"\u0426\u0435\u043d\u0430"}),Object(p.jsx)("th",{children:"\u0415\u0434.\u0438\u0437\u043c"})]})}),Object(p.jsx)("tbody",{})]})]})})},f=n(309),v=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)([]),j=Object(b.a)(d,2),h=j[0],m=j[1],x=Object(c.useState)(""),O=Object(b.a)(x,2),v=O[0],y=O[1],g=Object(c.useState)([]),w=Object(b.a)(g,2),N=w[0],k=w[1],E=Object(c.useState)([]),S=Object(b.a)(E,2),A=S[0],T=S[1];function C(){return(C=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("user"),e.next=3,fetch("api/user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:v,quantity:N})});case 3:if(!0!==(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:n=e.sent,console.log(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){fetch("/api/menu").then((function(e){return e.json()})).then((function(e){o(!0),m(e),T(Array.from({length:e.length},(function(){return 0})))}),(function(e){o(!0),a(e)}))}),[]);var F=function(e){A[e.target.id]=e.target.value,k(A),console.log(k)};return n?Object(p.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",n.message]}):i?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(p.jsxs)("form",{className:"userForm",children:[Object(p.jsx)("input",{type:"hidden",name:"id",value:""}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"\u0412\u0430\u0448\u0435 \u0418\u043c\u044f:"}),Object(p.jsx)("input",{className:"form-control",name:"name",value:v,onChange:function(e){var t=e.target.value;y(t),console.log(v)}})]}),Object(p.jsx)("div",{className:"panel-body",children:Object(p.jsx)("button",{onClick:function(){return C.apply(this,arguments)},className:"btn btn-sm btn-primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u0411\u043b\u044e\u0434\u043e"}),Object(p.jsx)("th",{children:"\u0426\u0435\u043d\u0430"}),Object(p.jsx)("th",{children:"\u0415\u0434.\u0438\u0437\u043c"}),Object(p.jsx)("th",{children:"\u041a\u043e\u043b-\u0432\u043e"})]})}),Object(p.jsx)("tbody",{children:h.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.age}),Object(p.jsx)("td",{children:e.measure}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{className:"form-control",name:"quantity",id:t,onChange:F})})]},e._id)}))})]})]}):Object(p.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})},y=n(126),g=n(237),w=n.n(g),N=(n(438),n(149)),k=n.n(N),E=n(493),S=n(492),A=function(e){return/^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/.test(String(e).toLowerCase())},T=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)([]),d=Object(b.a)(l,2),j=d[0],u=d[1];Object(c.useEffect)((function(){k.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){var t=e.data;a(t)}))}),[]);return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("h1",{children:"Material Table Example Using JSONPlaceholder API"})," ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(w.a,{title:"User Details",columns:[{title:"NAME",field:"name"},{title:"USERNAME",field:"username"},{title:"EMAIL",field:"email"},{title:"PHONE",field:"phone"},{title:"WEBSITE",field:"website"}],data:n,options:{headerStyle:{borderBottomColor:"red",borderBottomWidth:"3px",fontFamily:"verdana"},actionsColumnIndex:-1},editable:{onRowUpdate:function(e,t){return new Promise((function(c){!function(e,t,c){var r=[];""===e.name&&r.push("Try Again, You didn't enter the name field"),""===e.username&&r.push("Try Again, You didn't enter the Username field"),""!==e.email&&!1!==A(e.email)||r.push("Oops!!! Please enter a valid email"),""===e.phone&&r.push("Try Again, Phone number field can't be blank"),""===e.website&&r.push("Try Again, Enter website url before submitting"),r.length<1?k.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e).then((function(r){var s=Object(y.a)(n);s[t.tableData.id]=e,a(Object(y.a)(s)),c(),o(!1),u([])})).catch((function(e){u(["Update failed! Server error"]),o(!0),c()})):(u(r),o(!0),c())}(e,t,c)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var c=[];""===e.name&&c.push("Try Again, You didn't enter the name field"),""===e.username&&c.push("Try Again, You didn't enter the Username field"),""!==e.email&&!1!==A(e.email)||c.push("Oops!!! Please enter a valid email"),""===e.phone&&c.push("Try Again, Phone number field can't be blank"),""===e.website&&c.push("Try Again, Enter website url before submitting"),c.length<1?k.a.post("https://jsonplaceholder.typicode.com/users",e).then((function(c){var r=Object(y.a)(n);r.push(e),a(r),t(),u([]),o(!1)})).catch((function(e){u(["Cannot add data. Server error!"]),o(!0),t()})):(u(c),o(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){k.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e.id)).then((function(c){var r=Object(y.a)(n),s=e.tableData.id;r.splice(s,1),a(Object(y.a)(r)),t()})).catch((function(e){u(["Delete failed! Server error"]),o(!0),t()}))}(e,t)}))}}}),Object(p.jsx)("div",{children:i&&Object(p.jsxs)(E.a,{severity:"error",children:[Object(p.jsx)(S.a,{children:"ERROR"}),j.map((function(e,t){return Object(p.jsx)("div",{children:e},t)}))]})})]})},C=function(){return Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"},children:[Object(p.jsx)("span",{className:"brand-logo",children:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/",children:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/user",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/create",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u0435\u043d\u044e"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/create_mat",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u0435\u043d\u044e Material"})})]})]})})};n(459);var F=function(){var e=Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/",exact:!0,children:Object(p.jsx)("div",{style:{padding:"30px"},children:Object(p.jsx)(x,{})})}),Object(p.jsx)(i.b,{path:"/user",exact:!0,children:Object(p.jsx)("div",{style:{padding:"30px"},children:Object(p.jsx)(v,{})})}),Object(p.jsx)(i.b,{path:"/create",exact:!0,children:Object(p.jsx)(O,{})}),Object(p.jsx)(i.b,{path:"/create_mat",exact:!0,children:Object(p.jsx)(T,{})}),Object(p.jsx)(i.a,{to:"/create"})]});return Object(p.jsxs)(s.a,{children:[Object(p.jsx)(C,{}),Object(p.jsx)("div",{className:"container",children:e})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(p.jsx)(F,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[460,1,3]]]);
//# sourceMappingURL=main.c9800e30.chunk.js.map
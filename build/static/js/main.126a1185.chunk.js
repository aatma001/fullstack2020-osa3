(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),u=(t(20),t(4)),l=t(2),i=t(3),m=t.n(i),s="/api/persons",d=function(){return m.a.get(s)},f=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n)},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},v=function(e){var n=e.person,t=e.handleDelete;return o.a.createElement("li",null,n.name," ",n.number,o.a.createElement("button",{onClick:function(){return t(n)}},"Poista"))},E=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Add a new"),o.a.createElement("form",{onSubmit:e.addPerson},o.a.createElement("div",null,"name ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),o.a.createElement("div",null,"number ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},g=function(e){var n=e.handleFilterChange;return o.a.createElement("div",null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement("div",null,o.a.createElement("form",null,"filter shown with ",o.a.createElement("input",{onChange:n}))))},p=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],s=i[1],p=Object(a.useState)(""),w=Object(l.a)(p,2),j=w[0],O=w[1],C=Object(a.useState)(""),k=Object(l.a)(C,2),N=k[0],S=k[1],y=Object(a.useState)(null),P=Object(l.a)(y,2),D=P[0],T=P[1],A=Object(a.useState)(!1),B=Object(l.a)(A,2),F=B[0],J=B[1];Object(a.useEffect)((function(){d().then((function(e){r(e.data)}))}),[]);var L=function(e,n){console.log("painettu");var a=t.find((function(n){return n.id===e})),o=Object(u.a)(Object(u.a)({},a),{},{number:n});h(o.id,o).then((function(n){r(t.map((function(t){return t.id!==e?t:n.data}))),T("information of ".concat(a.name," has been changed"))})).catch((function(e){T("information of ".concat(a.name," has already been removed grom the server")),J(!0)})),setTimeout((function(){T(null),J(!1)}),5e3)},W=function(e){window.confirm("poistetaanko ".concat(e.name,"?"))&&b(e.id).then((function(){r(t.filter((function(n){return n.id!==e.id})))})),T("".concat(e.name," deleted from the server")),setTimeout((function(){T(null),J(!1)}),5e3)},x=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),I=function(e){var n=e.message;e.isError;return null===n?null:o.a.createElement("div",{className:F?"error":"succes"},n)};return o.a.createElement("div",null,o.a.createElement(I,{message:D}),o.a.createElement(g,{handleFilterChange:function(e){S(e.target.value)}}),o.a.createElement(E,{addPerson:function(e){e.preventDefault();var n={name:m,number:j};if(t.some((function(e){return e.name===m}))){if(window.confirm("".concat(m," on jo lis\xe4tty, vaihdetaanko numeroa?"))){var a=t.find((function(e){return e.name===m}));console.log(a.id),L(a.id,j)}}else f(n).then((function(e){r(t.concat(e)),s(""),O(""),T("Added ".concat(m)),J(!1)})),setTimeout((function(){T(null)}),5e3)},handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newName:m,newNumber:j}),o.a.createElement("ul",null,x.map((function(e,n){return o.a.createElement(v,{key:n,person:e,handleDelete:W})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.126a1185.chunk.js.map
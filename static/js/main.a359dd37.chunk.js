(this.webpackJsonpshopping_list=this.webpackJsonpshopping_list||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),a=n(15),l=n.n(a),s=(n(23),n(24),function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h3",{children:"make your shopping easier"})})}),j=n(10),o=n(6),u=n(34),d=n(31),b=n(32),h=n(16),O=n(33),x=n(35);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.createElement("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"});function v(e,t){var n=e.title,r=e.titleId,i=m(e,["title","titleId"]);return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"currentColor",viewBox:"0 0 16 16",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,p)}var g=c.forwardRef(v),k=(n.p,function(e){var t=e.addItem,n=e.setTitle,i=e.title,a=Object(c.useState)(""),l=Object(o.a)(a,2),s=l[0],j=l[1];return Object(r.jsxs)(O.a,{children:[Object(r.jsxs)(O.a.Group,{children:[Object(r.jsx)(O.a.Label,{htmlFor:"title",children:"Add title"}),Object(r.jsx)(O.a.Control,{type:"text",placeholder:"e. g. market",name:"title",value:i,onChange:function(e){return n(e.target.value)}})]}),Object(r.jsxs)(O.a.Group,{children:[Object(r.jsx)(O.a.Label,{htmlFor:"item",children:"Add item"}),Object(r.jsx)(O.a.Control,{type:"text",placeholder:"e. g. milk",name:"item",value:s,onChange:function(e){return j(e.target.value)}}),Object(r.jsx)(x.a,{variant:"outline-dark",size:"sm",onClick:function(){t(s),j("")},children:Object(r.jsx)(g,{})})]})]})}),y=function(e){var t=e.listItem,n=e.removeItem,c=e.saveList;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h5",{children:t.title}),Object(r.jsx)("ul",{children:t.list.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:e}),Object(r.jsx)(x.a,{variant:"danger",size:"sm",onClick:function(){return n(e)},children:"x"})]},e)}))}),Object(r.jsx)(x.a,{variant:"outline-dark",onClick:function(){return c()},children:"save"})]})},w=n(17),C=n.n(w),I=function(e){var t=e.shoppingLists,n=e.deleteList;return t.map((function(e){return Object(r.jsxs)(h.a,{className:"card",children:[Object(r.jsx)(x.a,{variant:"danger",size:"sm",onClick:function(){return n(e.id)},children:"x"}),Object(r.jsx)("h5",{children:e.title}),Object(r.jsx)("ul",{children:e.list.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:e}),Object(r.jsx)(O.a.Check,{type:"checkbox"})," "]},e)}))}),Object(r.jsxs)("small",{children:["Created at: ",C()(e.createdat).format("lll")]})]},e.id)}))},L=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),l=Object(o.a)(a,2),s=l[0],O=l[1],x=Object(c.useState)([{id:1,title:"Market",list:["bread","flour","water"]}]),f=Object(o.a)(x,2),m=f[0],p=f[1],v={id:Object(u.a)(),title:n,list:s};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(b.a,{xs:1,md:2,lg:2,children:[Object(r.jsxs)(h.a,{children:[Object(r.jsx)("h4",{children:"make a list"}),Object(r.jsx)(k,{addItem:function(e){var t=[].concat(Object(j.a)(s),[e]);O(Object(j.a)(new Set(t)))},setTitle:i,title:n})]}),Object(r.jsxs)(h.a,{className:"output",children:[Object(r.jsx)("h4",{children:"list preview"}),Object(r.jsx)(y,{listItem:v,saveList:function(){var e=[].concat(Object(j.a)(m),[v]);p(e),i(""),O([])},removeItem:function(e){var t=s.filter((function(t){return t!==e}));O(t)}})]})]}),Object(r.jsx)("h4",{children:"saved lists"}),Object(r.jsx)(b.a,{lg:3,md:2,xs:1,children:Object(r.jsx)(I,{shoppingLists:m,deleteList:function(e){var t=m.filter((function(t){return t.id!==e}));p(t)}})})]})})};var S=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(s,{}),Object(r.jsx)(L,{})]})};l.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a359dd37.chunk.js.map
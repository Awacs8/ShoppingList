(this.webpackJsonpshopping_list=this.webpackJsonpshopping_list||[]).push([[0],{29:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(21),l=n.n(i),s=(n(29),n(13)),j={integration:"react-1-xRahVAdrigC7yKGNGy6AXpjiqvZHnJKysgMvhFSSNHBTAspFv8ao-XE3hovlv5nD9VH0YvWOvgOYpf57390wzxPshdQVZ1Q3iollh2LiCAvh-KxR93Bi93-y",tt:"tt-1-f3N1-IlMdXTvgI-Acw3cOiUme9hKI7l2qAPeFFNnkcM=",version:"2020-11-20"},o=(n(32),function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h3",{children:"make your shopping easier"})})}),d=n(14),h=n(8),u=n(43),b=n(40),O=n(41),x=n(22),m=n(42),f=n(44);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var g=c.createElement("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"});function y(e,t){var n=e.title,r=e.titleId,a=v(e,["title","titleId"]);return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"currentColor",viewBox:"0 0 16 16",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,g)}var w=c.forwardRef(y),S=(n.p,function(){var e=Object(s.b)(),t=e.Frame,n=e.sync,a=e.configureFrame,i=e.addRecord,l=e.deleteRecord,j=Object(c.useState)(""),o=Object(h.a)(j,2),p=o[0],v=o[1],g=Object(c.useState)(""),y=Object(h.a)(g,2),S=y[0],k=y[1],I=Object(c.useState)([]),N=Object(h.a)(I,2),A=N[0],C=N[1];Object(c.useEffect)((function(){a({tableName:"SHOPPING LIST",limit:10}),n()}),[]);var H={id:Object(u.a)(),title:p,list:A};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)("h4",{children:"make a list"}),Object(r.jsxs)(O.a,{xs:1,md:2,lg:2,children:[Object(r.jsx)(x.a,{children:Object(r.jsxs)(m.a,{children:[Object(r.jsxs)(m.a.Group,{children:[Object(r.jsx)(m.a.Label,{htmlFor:"title",children:"Add title"}),Object(r.jsx)(m.a.Control,{type:"text",placeholder:"e. g. market",name:"title",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(r.jsxs)(m.a.Group,{children:[Object(r.jsx)(m.a.Label,{htmlFor:"item",children:"Add item"}),Object(r.jsx)(m.a.Control,{type:"text",placeholder:"e. g. milk",name:"item",value:S,onChange:function(e){return k(e.target.value)}}),Object(r.jsx)(f.a,{variant:"outline-dark",size:"sm",onClick:function(e){e.preventDefault();var t=[].concat(Object(d.a)(A),[S]);C(t),k("")},children:Object(r.jsx)(w,{})})]})]})}),Object(r.jsxs)(x.a,{className:"output",children:[Object(r.jsx)("h4",{children:H.title}),Object(r.jsx)(f.a,{variant:"outline-dark",onClick:function(e){return i({tableName:"SHOPPING LIST",newRecord:{title:p,itemList:A,createdAt:(new Date).toISOString()}}),v(""),C([]),void n()},children:"save"}),Object(r.jsx)("ul",{children:H.list.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})]}),Object(r.jsx)("h4",{children:"saved lists"}),Object(r.jsx)(O.a,{lg:3,md:2,xs:1,children:t().map((function(e,c){return Object(r.jsxs)(x.a,{className:"card",children:[Object(r.jsx)(f.a,{variant:"outline-dark",size:"sm",onClick:function(){return function(e){l({record:t(e),tableName:"SHOPPING LIST"}),n()}(c)},children:"x"}),Object(r.jsx)("h4",{children:e.title}),Object(r.jsx)("ul",{children:e.itemlist.map((function(e){return Object(r.jsx)("li",{children:e},e)}))},p),Object(r.jsxs)("small",{children:["Created at: ",e.createdat]})]},c)}))})]})})});var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(s.a,{ebconfig:j,children:[Object(r.jsx)(o,{}),Object(r.jsx)(S,{})]})})};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7ac3f6cb.chunk.js.map
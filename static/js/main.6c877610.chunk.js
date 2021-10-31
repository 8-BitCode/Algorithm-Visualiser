(this["webpackJsonpalorithm-visualiser"]=this["webpackJsonpalorithm-visualiser"]||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(6),i=n.n(c),s=n(2),o=(n(11),n(3)),l=n.n(o),u=n(4);function h(){return(h=Object(u.a)(l.a.mark((function t(e){var n,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=0;n<e.length-1;n++)for(r=0;r<e.length-1-n;r++)e[r]>e[r+1]&&(a=[e[r+1],e[r]],e[r]=a[0],e[r+1]=a[1],e=a);return t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function t(e){var n,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e.length;0!==n;)r=Math.floor(Math.random()*n),n--,a=[e[r],e[n]],e[n]=a[0],e[r]=a[1];return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=n(0);function d(t){var e=0,n=t.setHeight,a=t.arr,c=t.updateArr,i=a.slice();i.sort((function(t,e){return t-e}));var o=t.setSortStatus,l=Object(r.useState)(100),u=Object(s.a)(l,2),d=u[0],O=u[1],g=Object(r.useState)(20),f=Object(s.a)(g,2),p=f[0],x=f[1],v=Object(r.useRef)(),m=function(){var t=v.current.clientHeight;n(t)};Object(r.useEffect)((function(){m()})),Object(r.useEffect)((function(){window.addEventListener("resize",m)}));var S=t.Algorithm,w=t.setAlgorithm;var y=window.matchMedia("(max-width:560px)").matches;function N(){for(var t,e,n=[],r=0;r<p;r++)n.push((t=1,e=1e3,Math.floor(Math.random()*(e-t+1)+t)));c(n)}function B(){J("none"===k?"block":"none")}!0===y&&(y="none");var A=Object(r.useState)(y),C=Object(s.a)(A,2),k=C[0],J=C[1];return JSON.stringify(a)===JSON.stringify(i)?o(!0):JSON.stringify(a)!==JSON.stringify(i)&&o(!1),Object(b.jsx)("div",{className:"NavBar",children:Object(b.jsxs)("nav",{className:"navBar",ref:v,children:[Object(b.jsx)("div",{className:"Title",children:"Sorting Algorithm"}),Object(b.jsxs)("a",{href:"#",className:"Toggle",onClick:B,children:[Object(b.jsx)("span",{className:"Bar"}),Object(b.jsx)("span",{className:"Bar"}),Object(b.jsx)("span",{className:"Bar"})]}),Object(b.jsx)("div",{className:"Inputs",style:{display:k},children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("button",{onClick:N,children:Object(b.jsx)("li",{children:"Initialise array"})}),Object(b.jsx)("button",{children:Object(b.jsxs)("li",{children:["Algorithms:",Object(b.jsxs)("select",{onChange:function(t){w(t.target.value)},children:[Object(b.jsx)("option",{value:"Bubble Sort",children:"Bubble sort"}),Object(b.jsx)("option",{value:"Bogo Sort",children:"Bogo Sort"})]})]})}),Object(b.jsx)("button",{onClick:function(){function t(){JSON.stringify(a)===JSON.stringify(i)&&(clearInterval(e),!0===y?J("none"):!1===y&&J("block"))}function n(){var t=a.slice();c(t)}B(),"Bubble Sort"===S&&(e=setInterval((function(){(function(t){h.apply(this,arguments)})(a),n(),t()}),d)),"Bogo Sort"===S&&(e=setInterval((function(){(function(t){j.apply(this,arguments)})(a),n(),t()}),d))},children:Object(b.jsx)("li",{children:"Sort!"})}),Object(b.jsxs)("button",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{children:"Array Length:"}),Object(b.jsx)("input",{onChange:function(t){x(t.target.value),N()},type:"range",min:"5",max:"150"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Sort Speed:"}),Object(b.jsx)("input",{onChange:function(t){O(1e3-t.target.value)},type:"range",min:"1",max:"1000"})]})," "]})]})})]})})}n(14);function O(t){var e=t.arr,n=t.sortStatus,r=t.height,a=0;a=!1===n?"white":"green";var c=Math.max.apply(null,e);return Object(b.jsx)("div",{className:"arrayContainer",children:Object(b.jsx)("center",{children:e.map((function(t,n){return Object(b.jsx)("div",{className:"arrayElement",style:{height:"".concat((window.innerHeight-r-45)*(t/c),"px"),width:"".concat((window.innerWidth-16)/e.length/2,"px"),marginLeft:"".concat((window.innerWidth-20)/e.length/5,"px"),marginRight:"".concat((window.innerWidth-20)/e.length/5,"px"),marginTop:"".concat(window.innerWidth/e.length/5,"px"),backgroundColor:"".concat(a)}},n)}))})})}var g=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(r.useState)("Bubble Sort"),h=Object(s.a)(u,2),j=h[0],g=h[1],f=Object(r.useState)(),p=Object(s.a)(f,2),x=p[0],v=p[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d,{updateArr:a,arr:n,sortStatus:o,setSortStatus:l,Algorithm:j,setAlgorithm:g,height:x,setHeight:v}),Object(b.jsx)(O,{updateArr:a,arr:n,sortStatus:o,setSortStatus:l,Algorithm:j,setAlgorithm:g,height:x,setHeight:v})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.6c877610.chunk.js.map
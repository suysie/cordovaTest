(this["webpackJsonpio.cordova.hellocordova"]=this["webpackJsonpio.cordova.hellocordova"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(5),s=c.n(i),o=(c(12),c(4)),u=c.n(o),l=c(6),d=c(2),j=function(e){var t=e.title,c=e.calories,a=e.image,r=e.ingredients;return Object(n.jsxs)("div",{className:"recipe",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ol",{children:r.map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("img",{className:"image",src:a,alt:""})]})},b=(c(14),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),o=s[0],b=s[1],p=Object(a.useState)("chickn"),h=Object(d.a)(p,2),f=h[0],m=h[1];Object(a.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("2da4af9d","&app_key=").concat("2e2b5a9c2a87fda6e39295bc68829280"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(o),b("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){b(e.target.value)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:" Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(n.jsx)(j,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};function h(){s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}window.cordova?document.addEventListener("deviceready",(function(){h()}),!1):h(),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.5b5b12ec.chunk.js.map
(function(e){function t(t){for(var c,o,a=t[0],b=t[1],f=t[2],l=0,j=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&j.push(r[o][0]),r[o]=0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);s&&s(t);while(j.length)j.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,a=1;a<n.length;a++){var b=n[a];0!==r[b]&&(c=!1)}c&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={index:0},u=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-layout/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],b=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var s=b;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=(n("a4d3"),n("e01a"),n("cf05")),u=n.n(r),o={class:"banner"},a=Object(c["e"])("img",{alt:"Vue logo",src:u.a},null,-1),b=Object(c["e"])("a",{href:"https://github.com/uivjs/vue-layout",target:"__blank"},"Vue Layout",-1);function f(e,t,n,r,u,f){var s=Object(c["q"])("github-corners"),l=Object(c["q"])("example-base"),j=Object(c["q"])("markdown-preview");return Object(c["l"])(),Object(c["d"])("div",null,[Object(c["e"])("header",o,[a,b,Object(c["e"])("p",null,Object(c["r"])(e.description),1)]),Object(c["g"])(s,{fixed:"",href:"https://github.com/uivjs/vue-layout"}),Object(c["g"])(l),Object(c["g"])(j,{class:"markdown"},{default:Object(c["s"])((function(){return[Object(c["f"])(Object(c["r"])(e.markdown),1)]})),_:1})])}var s=n("222a"),l=n("275c"),j={class:"warpper"},O=Object(c["f"])(" Header "),i=Object(c["f"])(" Content "),d=Object(c["f"])(" Footer "),p=Object(c["f"])(" Header "),g=Object(c["f"])(" Sider "),v=Object(c["f"])(" Content "),h=Object(c["f"])(" Footer "),_=Object(c["f"])(" Header "),m=Object(c["f"])(" Content "),y=Object(c["f"])(" Sider "),w=Object(c["f"])(" Footer "),x=Object(c["f"])(" Sider "),k=Object(c["f"])(" Header "),q=Object(c["f"])(" Content "),P=Object(c["f"])(" Footer ");function S(e,t,n,r,u,o){var a=Object(c["q"])("v-header"),b=Object(c["q"])("v-content"),f=Object(c["q"])("v-footer"),s=Object(c["q"])("v-layout"),l=Object(c["q"])("v-sider");return Object(c["l"])(),Object(c["d"])("div",j,[Object(c["g"])(s,{class:"example"},{default:Object(c["s"])((function(){return[Object(c["g"])(a,{class:"header"},{default:Object(c["s"])((function(){return[O]})),_:1}),Object(c["g"])(b,{class:"content"},{default:Object(c["s"])((function(){return[i]})),_:1}),Object(c["g"])(f,{class:"footer"},{default:Object(c["s"])((function(){return[d]})),_:1})]})),_:1}),Object(c["g"])(s,{class:"example"},{default:Object(c["s"])((function(){return[Object(c["g"])(a,{class:"header"},{default:Object(c["s"])((function(){return[p]})),_:1}),Object(c["g"])(s,null,{default:Object(c["s"])((function(){return[Object(c["g"])(l,{class:"sider"},{default:Object(c["s"])((function(){return[g]})),_:1}),Object(c["g"])(b,{class:"content"},{default:Object(c["s"])((function(){return[v]})),_:1})]})),_:1}),Object(c["g"])(f,{class:"footer"},{default:Object(c["s"])((function(){return[h]})),_:1})]})),_:1}),Object(c["g"])(s,{class:"example"},{default:Object(c["s"])((function(){return[Object(c["g"])(a,{class:"header"},{default:Object(c["s"])((function(){return[_]})),_:1}),Object(c["g"])(s,null,{default:Object(c["s"])((function(){return[Object(c["g"])(b,{class:"content"},{default:Object(c["s"])((function(){return[m]})),_:1}),Object(c["g"])(l,{class:"sider"},{default:Object(c["s"])((function(){return[y]})),_:1})]})),_:1}),Object(c["g"])(f,{class:"footer"},{default:Object(c["s"])((function(){return[w]})),_:1})]})),_:1}),Object(c["g"])(s,{class:"example"},{default:Object(c["s"])((function(){return[Object(c["g"])(l,{class:"sider"},{default:Object(c["s"])((function(){return[x]})),_:1}),Object(c["g"])(s,null,{default:Object(c["s"])((function(){return[Object(c["g"])(a,{class:"header"},{default:Object(c["s"])((function(){return[k]})),_:1}),Object(c["g"])(b,{class:"content"},{default:Object(c["s"])((function(){return[q]})),_:1}),Object(c["g"])(f,{class:"footer"},{default:Object(c["s"])((function(){return[P]})),_:1})]})),_:1})]})),_:1})])}var C,M=n("ade3"),F=n("a2e3"),H=(n("767d"),Object(c["h"])({components:(C={},Object(M["a"])(C,"v-layout",F["d"]),Object(M["a"])(C,"v-header",F["c"]),Object(M["a"])(C,"v-content",F["a"]),Object(M["a"])(C,"v-footer",F["b"]),Object(M["a"])(C,"v-sider",F["e"]),C)})),J=(n("ede1"),n("6b0d")),T=n.n(J);const V=T()(H,[["render",S],["__scopeId","data-v-3f530d10"]]);var G=V,I=(n("5d65"),n("8720")),L=n("bd99"),z=Object(c["h"])({data:function(){return{markdown:I["a"],description:L.description}},components:{"example-base":G,GithubCorners:s["a"],MarkdownPreview:l["a"]}});n("6f2b");const A=T()(z,[["render",f]]);var B=A;Object(c["c"])(B).mount("#app")},"6f2b":function(e,t,n){"use strict";n("ac4a")},"99f3":function(e,t,n){},ac4a:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ede1:function(e,t,n){"use strict";n("99f3")}});
//# sourceMappingURL=index.46877f14.js.map
(function(e){function n(n){for(var o,c,u=n[0],s=n[1],i=n[2],l=0,b=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(n);while(b.length)b.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={index:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fcb5db66"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var i=new Error;a=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/vue-monorepo-template/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var p=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2107:function(e,n,t){"use strict";t("c8bb")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),r={id:"nav"},a=Object(o["g"])("Home"),c=Object(o["g"])("About");function u(e,n,t,u,s,i){var l=Object(o["w"])("github-corners"),p=Object(o["w"])("simple"),b=Object(o["w"])("v-base"),m=Object(o["w"])("router-link"),f=Object(o["w"])("router-view");return Object(o["q"])(),Object(o["e"])("div",null,[Object(o["h"])(l,{fixed:"",href:"https://github.com/tsbbjs/vue-monorepo-template"}),Object(o["h"])(p,{title:"@vue-monorepo-template/simple"}),Object(o["h"])(b,{title:"@vue-monorepo-template/base"}),Object(o["f"])("div",r,[Object(o["h"])(m,{to:"/"},{default:Object(o["B"])((function(){return[a]})),_:1}),Object(o["h"])(m,{to:"/about"},{default:Object(o["B"])((function(){return[c]})),_:1})]),Object(o["h"])(f)])}var s=t("222a"),i=t("2744"),l=t("bb67"),p=Object(o["i"])({components:{GithubCorners:s["a"],Simple:i["a"],VBase:l["a"]}}),b=(t("acb9"),t("6b0d")),m=t.n(b);const f=m()(p,[["render",u]]);var d=f,h=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),v=t("cf05"),j=t.n(v),g=function(e){return Object(o["t"])("data-v-f7f3c17a"),e=e(),Object(o["r"])(),e},O=g((function(){return Object(o["f"])("div",{class:"home"},[Object(o["f"])("img",{alt:"Vue logo",src:j.a})],-1)}));function w(e,n,t,r,a,c){var u=Object(o["w"])("markdown-preview");return Object(o["q"])(),Object(o["e"])("div",null,[O,Object(o["h"])(u,{class:"markdown"},{default:Object(o["B"])((function(){return[Object(o["g"])(Object(o["y"])(a.markdown),1)]})),_:1})])}var y=t("275c"),k=(t("5d65"),"vue-monorepo-template\n===\n\n[![Downloads](https://img.shields.io/static/v1?label=Github&message=repo&color=green&style=flat&logo=github)](https://github.com/tsbbjs/vue-monorepo-template)\n[![Build & Deploy](https://github.com/tsbbjs/vue-monorepo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/tsbbjs/vue-monorepo-template/actions/workflows/ci.yml)\n\n简单的 [`vue 3`](https://v3.vuejs.org/) 包开发工程实例模板。\n\n### 目录结构\n\n```shell\n.\n├── README.md\n├── lerna.json\n├── package.json\n├── packages             # 放置包的目录\n│   ├── base                # 📦 包 @vue-monorepo-template/base\n│   │   ├── cjs             # 🔄 编译后的 cjs 目录\n│   │   ├── esm             # 🔄 编译后的 esm 目录\n│   │   ├── package.json\n│   │   ├── src             # 包源码目录\n│   │   └── tsconfig.json\n│   └── simple              # 📦 包 @vue-monorepo-template/simple\n├── tsconfig.json\n└── website              # 🐝 包实例测试，网站\n    ├── README.md\n    ├── babel.config.js\n    ├── package.json\n    ├── public\n    ├── src\n    └── vue.config.js\n```\n\n### 开发\n\n1. 安装\n\n```shell\nnpm install\n```\n\n2. 安装包和实例中的依赖\n\n```shell\nnpm run bootstrap\n```\n\n3. 编译包中代码\n\n```shell\nnpm run build        # 编译所有包 📦 代码\n\nnpm run watch:simple # 实时编译 📦 @vue-monorepo-template/simple\nnpm run watch:base   # 实时编译 📦 @vue-monorepo-template/base\n```\n\n4. 启动 `website` 实例网站\n\n```shell\nnpm run start\n```\n\n### License\n\nLicensed under the MIT License."),_={name:"Home",data:function(){return{markdown:k}},components:{MarkdownPreview:y["a"]}};t("2107");const P=m()(_,[["render",w],["__scopeId","data-v-f7f3c17a"]]);var x=P,M=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],E=Object(h["a"])({mode:"hash",history:Object(h["b"])("/vue-monorepo-template/"),routes:M}),S=E;Object(o["d"])(d).use(S).mount("#app")},a45a:function(e,n,t){},acb9:function(e,n,t){"use strict";t("a45a")},c8bb:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=index.0c54a9aa.js.map
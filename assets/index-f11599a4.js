import{d as w,c as l,h as b,F as x,a as $,T as U,b as f,e as E,f as B,g as i,j as u,k as y,t as L,l as R,m as z,n as q}from"./vue-8dbfcb00.js";import{f as G}from"./rehype-prism-plus-c42acc8e.js";import{f as Z,b as K,c as W,s as X,U as Y,V as J,h as Q,W as ee,X as te,Y as ne,Z as re,_ as oe,$ as ae,a0 as se,a1 as le,a2 as ie}from"./unified-152f8c8b.js";import{w as ce,v as ue}from"./hast-util-7a05a89a.js";import{L as N,H as j,C as H,F as I,S as P}from"./vue-layout-4780400a.js";import"./micromark-extension-97e95626.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}})();const de="@uivjs/vue-layout",pe="1.1.1",fe="Layout component for Vue 3.0. Handling the overall layout of a page.",me="https://uivjs.github.io/vue-layout",ve="kenny wang <wowohoo@qq.com>",he="./cjs/index.js",ye="./esm/index.js",ge={type:"git",url:"https://github.com/uivjs/vue-layout"},_e="MIT",Ce=["dist.css","cjs","esm"],be=["layout","vue-layout","uivjs","vue","vue3"],we={vue:">=3.0.0"},ke={vue:"^3.0.0"},A={name:de,version:pe,description:fe,homepage:me,author:ve,main:he,module:ye,repository:ge,license:_e,files:Ce,keywords:be,peerDependencies:we,devDependencies:ke};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},_.apply(this,arguments)}var Se={href:{type:String,defalut:"",required:!0},size:{type:Number,defalut:80},bgColor:{type:String,defalut:"#151513"},color:{type:String,defalut:"#fff"},position:{type:String,defalut:"right"},fixed:{type:Boolean,defalut:!1},zIndex:[Number,String],bottom:Boolean};const xe=w({name:"GihubCorners",props:Se,setup(e){return()=>{var{href:r,size:o=80,color:a="#fff",bottom:n,zIndex:t=0,fixed:s=!1,position:d="right",bgColor:p="#151513"}=e,c=d==="left"?{left:0,transform:"scale(-1, 1)"}:{right:0};return n&&(c.bottom=0,c.top="initial",c.transform=d==="left"?"scale(-1, -1)":"scale(1, -1)"),l("a",{class:"github-corner",href:r,"aria-label":"View source on GitHub"},[l("svg",{width:o,height:o,viewBox:"0 0 250 250",style:_({fill:p,color:a,position:s?"fixed":"absolute",border:0,top:0,zIndex:Number(t||0)},c),"aria-hidden":"true"},[l("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},null),l("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},class:"octo-arm"},null),l("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"},null)])])}}});function Le(){return{type:"element",tagName:"span",properties:{class:"octicon octicon-link"},children:[]}}/*!
 * @uiw/copy-to-clipboard v1.0.12
 * Copy to clipboard.
 * 
 * Copyright (c) 2021 Kenny Wang
 * https://github.com/uiwjs/copy-to-clipboard.git
 * 
 * Licensed under the MIT license.
 */function Ne(e,r){const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style={position:"absolute",left:"-9999px"},document.body.appendChild(o);const a=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;o.select();let n=!1;try{n=!!document.execCommand("copy")}catch{n=!1}document.body.removeChild(o),a&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a)),r&&r(n)}function je(e){return e===void 0&&(e=""),{type:"element",tagName:"div",properties:{onClick:r=>{var{target:o}=r;o.classList.add("active"),Ne(e,function(){setTimeout(()=>{o.classList.remove("active")},2e3)})},class:"copied"},children:[{type:"element",tagName:"svg",properties:{class:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{class:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}}var F={}.hasOwnProperty,He=new Set(["table","thead","tbody","tfoot","tr"]);function D(e,r){for(var o=[],a=-1,n;++a<e.children.length;)n=e.children[a],n.type==="element"?o.push(Ie(r,n,a,e)):n.type==="text"?(e.type!=="element"||!He.has(e.tagName)||!ce(n))&&o.push(n.value):n.type==="raw"&&!r.skipHtml&&o.push(n.value);return o}function Ie(e,r,o,a){var n=e.schema,t=r.tagName,s={},d=n,p;if(n.space==="html"&&t==="svg"&&(d=X,e.schema=d),r.properties)for(p in r.properties)F.call(r.properties,p)&&Oe(s,p,r.properties[p],e);(t==="ol"||t==="ul")&&e.listDepth++;var c=D(r,e);(t==="ol"||t==="ul")&&e.listDepth--,e.schema=n;var C=r.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},v=e.components&&F.call(e.components,t)?e.components[t]:t,m=typeof v=="string"||v===x;if(t==="a"&&e.linkTarget&&(s.target=typeof e.linkTarget=="function"?e.linkTarget(String(s.href||""),r.children,typeof s.title=="string"?s.title:null):e.linkTarget),t==="a"&&e.transformLinkUri&&(s.href=e.transformLinkUri(String(s.href||""),r.children,typeof s.title=="string"?s.title:null)),!m&&t==="code"&&a.type==="element"&&a.tagName!=="pre"&&(s.inline=!0),!m&&(t==="h1"||t==="h2"||t==="h3"||t==="h4"||t==="h5"||t==="h6")&&(s.level=Number.parseInt(t.charAt(1),10)),t==="img"&&e.transformImageUri&&(s.src=e.transformImageUri(String(s.src||""),String(s.alt||""),typeof s.title=="string"?s.title:null)),!m&&t==="li"&&a.type==="element"){var g=Pe(r);s.checked=g&&g.properties?!!g.properties.checked:null,s.index=S(a,r),s.ordered=a.tagName==="ol"}if(!m&&(t==="ol"||t==="ul")&&(s.ordered=t==="ol",s.depth=e.listDepth),(t==="td"||t==="th")&&(s.align&&(s.style||(s.style={}),s.style.textAlign=s.align,delete s.align),m||(s.isHeader=t==="th")),!m&&t==="tr"&&a.type==="element"&&(s.isHeader=a.tagName==="thead"),e.sourcePos&&(s["data-sourcepos"]=Ae(C)),!m&&e.rawSourcePos&&(s.sourcePosition=r.position),!m&&e.includeElementIndex&&(s.index=S(a,r),s.siblingCount=S(a)),m||(s.node=r),typeof v=="function"){var k=_({node:r,children:c?b(x,c):void 0},s),h=v(k);if(h&&$(h))return h}if(typeof v=="string")return c.length>0?b(v,s,c):b(v,s)}function Pe(e){for(var r=-1;++r<e.children.length;){var o=e.children[r];if(o.type==="element"&&o.tagName==="input")return o}return null}function S(e,r){for(var o=-1,a=0;++o<e.children.length&&e.children[o]!==r;)e.children[o].type==="element"&&a++;return a}function Ae(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(r=>String(r)).join("")}function Fe(e){var r={};try{Y(e,o)}catch{}return r;function o(a,n){var t=a.slice(0,4)==="-ms-"?"ms-"+a.slice(4):a;r[t.replace(/-([a-z])/g,Te)]=n}}function Te(e,r){return r.toUpperCase()}function Oe(e,r,o,a){var n=Z(a.schema,r),t=o;t==null||t!==t||(Array.isArray(t)&&(t=n.commaSeparated?K(t):W(t)),n.property==="style"&&typeof t=="string"&&(t=Fe(t)),n.attribute&&(e[n.attribute]=t))}var T=["http","https","mailto","tel"];function O(e){var r=(e||"").trim(),o=r.charAt(0);if(o==="#"||o==="/")return r;var a=r.indexOf(":");if(a===-1)return r;for(var n=-1;++n<T.length;){var t=T[n];if(a===t.length&&r.slice(0,t.length).toLowerCase()===t)return r}return n=r.indexOf("?"),n!==-1&&a>n||(n=r.indexOf("#"),n!==-1&&a>n)?r:"javascript:void(0)"}var Ee=e=>r=>{ue(r,"element",(o,a,n)=>{o.tagName==="code"&&(n==null?void 0:n.type)==="element"&&n.tagName==="pre"&&o.properties&&"className"in o.properties&&Array.isArray(o.properties.className)&&(o.properties.className=o.properties.className.map(t=>typeof t=="string"?t.replace(/^language-vue/,"language-html"):t))})},Be={rehypePlugins:{type:Object,default:[]},remarkPlugins:{type:Object,default:[]},components:{type:Object,default:{}},source:{type:String,default:""},sourcePos:{type:Boolean,default:!1},rawSourcePos:{type:Boolean,default:!1},includeElementIndex:{type:Boolean,default:!1},skipHtml:{type:Boolean,default:!1},linkTarget:{type:[Function,String]},transformLinkUri:{type:Function,default:O},transformImageUri:{type:Function,default:O}},De=function e(r,o){return r===void 0&&(r=[]),o===void 0&&(o=""),r.forEach(a=>{a.type==="text"?o+=a.value:a.type==="element"&&a.children&&Array.isArray(a.children)&&(o+=e(a.children))}),o};const Me=w({name:"MarkdownPreview",props:Be,setup(e,r){var{slots:o}=r;function a(){return ee().use(te).use(ne).use(e.remarkPlugins||[]).use(re,{allowDangerousHtml:!0}).use(oe,{properties:"attr"}).use(ae).use(Ee).use(se).use(le).use(G,{ignoreMissing:!0}).use(ie,{rewrite:n=>{if(n.type=="element"&&/h(1|2|3|4|5|6)/.test(n.tagName)&&n.children&&Array.isArray(n.children)&&n.children.length>0){var t=n.children[0];t&&t.type==="element"&&t.properties&&(t.properties=_({className:"anchor"},t.properties),t.children=[Le()])}if(n.type==="element"&&n.tagName==="pre"){var s=De(n.children);n.children.push(je(s))}}}).use(e.rehypePlugins||[])}return()=>{var n=o&&o.default?o.default().filter(c=>c.type===U).map(c=>c.children):[],t=new J;t.value=n&&n.length>0?n.join():e.source;var s=a(),d=s.runSync(s.parse(t),t);if(d.type!=="root")throw new TypeError("Expected a `root` node");var p=b(x,{},D(d,{listDepth:0,schema:Q,components:e.components,sourcePos:e.sourcePos,rawSourcePos:e.rawSourcePos,includeElementIndex:e.includeElementIndex,skipHtml:e.skipHtml,linkTarget:e.linkTarget,transformLinkUri:e.transformLinkUri,transformImageUri:e.transformImageUri}));return l("div",{class:"markdown-body"},[p])}}});const M=(e,r)=>{const o=e.__vccOpts||e;for(const[a,n]of r)o[a]=n;return o},Ve=w({methods:{onCollapsed(){this.collapsed=!this.collapsed}},data(){return{collapsed:!1}},components:{Layout:N,Header:j,Content:H,Footer:I,Sider:P,"v-layout":N,"v-header":j,"v-content":H,"v-footer":I,"v-sider":P}}),$e={class:"warpper"};function Ue(e,r,o,a,n,t){const s=f("v-header"),d=f("v-content"),p=f("v-footer"),c=f("v-layout"),C=f("v-sider"),v=f("Sider"),m=f("Header"),g=f("Content"),k=f("Footer"),h=f("Layout");return E(),B("div",$e,[l(c,{class:"example"},{default:i(()=>[l(s,{class:"header"},{default:i(()=>[u(" Header ")]),_:1}),l(d,{class:"content"},{default:i(()=>[u(" Content ")]),_:1}),l(p,{class:"footer"},{default:i(()=>[u(" Vue Layout ©2021 Created by uiv ")]),_:1})]),_:1}),l(c,{class:"example"},{default:i(()=>[l(s,{class:"header"},{default:i(()=>[u(" Header ")]),_:1}),l(c,null,{default:i(()=>[l(C,{class:"sider"},{default:i(()=>[u(" Sider ")]),_:1}),l(d,{class:"content"},{default:i(()=>[u(" Content ")]),_:1})]),_:1}),l(p,{class:"footer"},{default:i(()=>[u(" Footer ")]),_:1})]),_:1}),l(c,{class:"example"},{default:i(()=>[l(s,{class:"header"},{default:i(()=>[u(" Header ")]),_:1}),l(c,null,{default:i(()=>[l(d,{class:"content"},{default:i(()=>[u(" Content ")]),_:1}),l(C,{class:"sider"},{default:i(()=>[u(" Sider ")]),_:1})]),_:1}),l(p,{class:"footer"},{default:i(()=>[u(" Footer ")]),_:1})]),_:1}),l(h,{class:"example"},{default:i(()=>[l(v,{collapsed:e.collapsed,class:"sider"},{default:i(()=>[u(" Sider ")]),_:1},8,["collapsed"]),l(h,null,{default:i(()=>[l(m,{class:"header"},{default:i(()=>[y("button",{onClick:r[0]||(r[0]=(...V)=>e.onCollapsed&&e.onCollapsed(...V))},L(e.collapsed?">>":"<<"),1),u(" Header ")]),_:1}),l(g,{class:"content"},{default:i(()=>[u(" Content ")]),_:1}),l(k,{class:"footer"},{default:i(()=>[u(" Footer ")]),_:1})]),_:1})]),_:1})])}const Re=M(Ve,[["render",Ue],["__scopeId","data-v-5de0f278"]]),ze=`@uivjs/vue-layout
===

[![Build & Deploy](https://github.com/uivjs/vue-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uivjs/vue-layout/actions/workflows/ci.yml)
[![Downloads](https://img.shields.io/npm/dm/@uivjs/vue-layout.svg?style=flat)](https://www.npmjs.com/package/@uivjs/vue-layout)
[![npm version](https://img.shields.io/npm/v/@uivjs/vue-layout.svg)](https://www.npmjs.com/package/@uivjs/vue-layout)
[![npm unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uivjs/vue-layout/file/README.md)

Layout component for Vue 3.0. Handling the overall layout of a page.

## Install

\`\`\`bash
npm i @uivjs/vue-layout
\`\`\`

## Usage

\`\`\`vue
<template>
  <v-layout>
    <v-header>header</v-header>
    <v-content>
      content
    </v-content>
    <v-footer>
      footer
    </v-footer>
  </v-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { Layout, Header, Content, Footer, Sider } from '@uivjs/vue-layout';

export default defineComponent({
  components: {
    ['v-layout'] : Layout,
    ['v-header'] : Header,
    ['v-content'] : Content,
    ['v-footer'] : Footer,
    ['v-sider'] : Sider,
  }
});
<\/script>
\`\`\`

\`\`\`vue
<template>
  <v-layout>
    <v-header> Header </v-header>
    <v-content> Content </v-content>
    <v-footer> Footer </v-footer>
  </v-layout>

  <v-layout>
    <v-header> Header </v-header>
    <v-layout>
      <v-sider> Sider </v-sider>
      <v-content> Content </v-content>
    </v-layout>
    <v-footer> Footer </v-footer>
  </v-layout>

  <v-layout>
    <v-header> Header </v-header>
    <v-layout>
      <v-content> Content </v-content>
      <v-sider> Sider </v-sider>
    </v-layout>
    <v-footer> Footer </v-footer>
  </v-layout>

  <v-layout>
    <v-sider> Sider </v-sider>
    <v-layout>
      <v-header> Header </v-header>
      <v-content> Content </v-content>
      <v-footer> Footer </v-footer>
    </v-layout>
  </v-layout>
</template>
\`\`\`

## collapsed

\`\`\`vue
<template>
  <Layout class="example">
    <Sider :collapsed="collapsed" class="sider"> Sider </Sider>
    <Layout>
      <Header class="header">
        <button @click="onCollapsed">{{ collapsed ? '>>' : '&lt;&lt;' }}</button>
        Header
      </Header>
      <Content class="content"> Content </Content>
      <Footer class="footer"> Footer </Footer>
    </Layout>
  </Layout>
</template>
<script>
import { defineComponent } from 'vue';
import { Layout, Header, Content, Footer, Sider } from '@uivjs/vue-layout';

export default {
  methods: {
    onCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    Layout, Header, Content, Footer, Sider
  },
};
<\/script>
\`\`\`

## Sider Props

Name | Type | Default | Description
---- | ---- | ---- | ----
collapsed | \`boolean\` | \`false\` | Current collapsed state

## Development

\`\`\`bash
npm install       # Installation dependencies
npm run bootstrap # Install dependencies in sub-packages
npm run build     # Compile package
\`\`\`

\`\`\`bash
# listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch     # Monitor the compiled package \`@uivjs/vue-layout\`
npm run start     # development mode, listen to compile preview website instance
\`\`\`

## License

Licensed under the MIT License.`,qe="/vue-layout/assets/vue-5532db34.svg";const Ge=w({data(){return{repopage:A.repository.url,markdown:ze,description:A.description}},components:{"example-base":Re,GithubCorners:xe,MarkdownPreview:Me}}),Ze=e=>(R("data-v-fd701ef9"),e=e(),z(),e),Ke=Ze(()=>y("div",null,[y("img",{src:qe,alt:"Vue Monorepo Template"})],-1)),We=["href"];function Xe(e,r,o,a,n,t){const s=f("github-corners"),d=f("example-base"),p=f("markdown-preview");return E(),B("div",null,[l(s,{fixed:"",target:"__blank",href:e.repopage},null,8,["href"]),y("header",null,[Ke,y("a",{href:e.repopage,target:"__blank"},"Vue Monorepo Template",8,We),y("p",null,L(e.description),1)]),l(d),l(p,{class:"markdown"},{default:i(()=>[u(L(e.markdown),1)]),_:1})])}const Ye=M(Ge,[["render",Xe],["__scopeId","data-v-fd701ef9"]]);q(Ye).mount("#app");

<template>
  <div>
    <header class="banner">
      <img alt="Vue logo" src="./assets/logo.png" />
      <a href="https://github.com/uivjs/vue-layout" target="__blank">Vue Layout</a>
      <p>{{ description }}</p>
    </header>
    <github-corners fixed href="https://github.com/uivjs/vue-layout" />
    <example-base />
    <markdown-preview class="markdown">
      {{ markdown }}
    </markdown-preview>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import GithubCorners from '@uivjs/vue-github-corners';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import ExampleBase from './Example.vue';
import '@uivjs/vue-markdown-preview/markdown.css';
import str from '@uivjs/vue-layout/README.md';
import pkg from '@uivjs/vue-layout/package.json';

export default defineComponent({
  data() {
    return {
      markdown: str,
      description: pkg.description,
    };
  },
  components: {
    'example-base': ExampleBase,
    GithubCorners,
    MarkdownPreview,
  },
});
</script>
<style>
.banner {
  text-align: center;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
}
.banner img {
  height: 20vmin;
}
.banner a {
  color: #09d3ac;
  font-weight: bold;
}
.banner p {
  margin-bottom: 10px;
  padding: 10px;
  max-width: 560px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
body,
html {
  margin: 0;
  padding: 0;
  background-color: #282c34;
}
.markdown {
  margin: 0 auto;
  max-width: 820px;
  padding: 23px;
  border-radius: 5px;
  margin-bottom: 110px;
}
</style>

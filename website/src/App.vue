<script>
import { defineComponent } from 'vue';
import pkg from '@uivjs/vue-layout/package.json';
import GithubCorners from '@uivjs/vue-github-corners';
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import '@uivjs/vue-markdown-preview/markdown.css';
import ExampleBase from './Example.vue';
import mdStr from '../../README.md';

export default defineComponent({
  data() {
    return {
      repopage: pkg.repository.url,
      markdown: mdStr,
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

<template>
  <div>
    <github-corners fixed target="__blank" :href="repopage" />
    <header>
      <div>
        <img src="./assets/vue.svg" alt="Vue Monorepo Template" />
      </div>
      <a :href="repopage" target="__blank">Vue Monorepo Template</a>
      <p>{{description}}</p>
    </header>
    <example-base></example-base>
    <markdown-preview class="markdown">
      {{ markdown }}
    </markdown-preview>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
}
header img {
  height: 20vmin;
}
header a {
  color: #09d3ac;
  font-weight: bold;
}
header p {
  margin-bottom: 10px;
  padding: 10px;
  max-width: 560px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.markdown {
  margin: 0 auto;
  max-width: 680px;
  padding: 23px;
  border-radius: 5px;
  margin-bottom: 110px;
}
</style>

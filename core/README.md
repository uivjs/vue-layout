@uivjs/vue-layout
===

[![Build & Deploy](https://github.com/uivjs/vue-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uivjs/vue-layout/actions/workflows/ci.yml)
[![Downloads](https://img.shields.io/npm/dm/@uivjs/vue-layout.svg?style=flat)](https://www.npmjs.com/package/@uivjs/vue-layout)
[![npm version](https://img.shields.io/npm/v/@uivjs/vue-layout.svg)](https://www.npmjs.com/package/@uivjs/vue-layout)
[![npm unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uivjs/vue-layout/file/README.md)

Layout component for Vue 3.0. Handling the overall layout of a page.

## Install

```bash
npm i @uivjs/vue-layout
```

## Usage

```vue
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
</script>
```

```vue
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
```

## Sider Props

Name | Type | Default | Description
---- | ---- | ---- | ----
collapsed | `boolean` | `false` | 当前收起状态

## Development

```bash
npm install       # Installation dependencies
npm run bootstrap # Install dependencies in sub-packages
npm run build     # Compile package
```

```bash
# listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch     # Monitor the compiled package `@uivjs/vue-layout`
npm run start     # development mode, listen to compile preview website instance
```

## License

Licensed under the MIT License.
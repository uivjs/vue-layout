<template>
  <div class="warpper">
    <v-layout class="example">
      <v-header class="header"> Header </v-header>
      <v-content class="content"> Content </v-content>
      <v-footer class="footer"> Vue Layout ©2021 Created by uiv </v-footer>
    </v-layout>

    <v-layout class="example">
      <v-header class="header"> Header </v-header>
      <v-layout>
        <v-sider class="sider"> Sider </v-sider>
        <v-content class="content"> Content </v-content>
      </v-layout>
      <v-footer class="footer"> Footer </v-footer>
    </v-layout>

    <v-layout class="example">
      <v-header class="header"> Header </v-header>
      <v-layout>
        <v-content class="content"> Content </v-content>
        <v-sider class="sider"> Sider </v-sider>
      </v-layout>
      <v-footer class="footer"> Footer </v-footer>
    </v-layout>

    <v-layout class="example">
      <v-sider class="sider"> Sider </v-sider>
      <v-layout>
        <v-header class="header"> Header </v-header>
        <v-content class="content"> Content </v-content>
        <v-footer class="footer"> Footer </v-footer>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Layout, Header, Content, Footer, Sider } from '@uivjs/vue-layout';
import '@uivjs/vue-layout/dist.css';

export default defineComponent({
  components: {
    ['v-layout']: Layout,
    ['v-header']: Header,
    ['v-content']: Content,
    ['v-footer']: Footer,
    ['v-sider']: Sider,
  },
});
</script>

<style scoped>
.warpper {
  max-width: 620px;
  margin: 0 auto;
  padding: 30px 0 60px 0;
}
.example {
  background-color: #fff;
  margin: 10px 0;
  border: 2px solid #fff;
  text-align: center;
  color: #fff;
}
.header {
  background-color: #7dbcea;
}
.content {
  background-color: #108ee9;
  line-height: 120px;
}
.footer {
  background-color: #7dbcea;
}
.sider {
  background-color: #3ba0e9;
  flex: 0 0 200px;
  max-width: 200px;
  min-width: 200px;
  width: 200px;
  color: #fff;
  line-height: 120px;
}
</style>

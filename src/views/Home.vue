<template>
  <div class>
  <el-menu
  :default-active="Data"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="Home"><router-link to="/">主页</router-link></el-menu-item>
  <el-menu-item index="Data"><router-link to="/Data">数据</router-link></el-menu-item>
  <el-menu-item index="Status"><router-link to="/Status">11</router-link></el-menu-item>
</el-menu>
  </div>
</template>

<script>
// import Home from "./Home";
// import Data from "./Data";
// import Status from "./Status";
 export default {
    data() {
      return {
        Data: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

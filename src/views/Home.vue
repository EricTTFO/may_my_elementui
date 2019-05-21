<template>
  <div class>
    主页
    <el-menu :default-active="Home" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="Home">主页</el-menu-item>
      <el-menu-item index="Data">管理</el-menu-item>
      <el-menu-item index="Status">统计</el-menu-item>
    </el-menu>
    卧槽
  </div>
</template>

<script>
export default {
  name: "home",
   data() {
    return {
      Home: "Home",
      Data: "Data",
      Status: "Status"
    };
  },
};
</script>

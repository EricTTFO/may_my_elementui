<template>
  <div>
     <div>主页</div>
    <el-menu default-active="users" class="el-menu-vertical-demo">
      <el-submenu index="users">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      </el-submenu>
      <el-menu-item index="bikes">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="rider" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

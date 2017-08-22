<template>
  <div id="elnav" class="fillcontain">
    <el-row style="height:100%;">
      <el-col :span="24" style="height:100%;">
        <el-menu default-active="2" class="el-menu-vertical-demo ohidden" theme="dark" style="min-height:100%" router="true">
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>页面管理</template>
            <el-menu-item index="product">产品页</el-menu-item>
            <el-menu-item index="about">关于页</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.nav-left {
  position: fixed;
  left: 0;
}
</style>

<template>
  <div id="headerTopCmpt">
    <el-row style="height: 100%;">
      <div class="header-container" :span="4">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  .header-container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
</style>

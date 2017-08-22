<template>
  <div class="fillcontain" id="app">
    <el-row style="height:100%;">
      <el-col :span="4" style="height:100%;">
        <NavLeft/>
      </el-col>
      <el-col :span="20" style="height:100%;">
        <HeaderTop/>
        <div style="padding: 40px 150px;">
          <router-view/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      NavLeft: require('@/components/NavLeft'),
      HeaderTop: require('@/components/HeaderTop')
    }
  }
</script>

<style>
  
</style>

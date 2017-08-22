<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer/>
  </div>
</template>                                                 
<script>
export default {
  name: 'app',
  components: {
    Header: require('@/components/Header'),
    Footer: require('@/components/Footer')
  }
}
</script>

<style>

</style>

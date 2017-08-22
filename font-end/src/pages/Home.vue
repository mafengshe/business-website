<template>
  <div>
    <Banner/>
    <Cmpshow/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Banner: require('@/components/Banner'),
    Cmpshow: require('@/components/Cmpshow')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>

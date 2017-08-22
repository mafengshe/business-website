<template>
  <div>
    <Banner/>
    <Prodshow/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Banner: require('@/components/Banner2'),
    Prodshow: require('@/components/Prodshow')
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

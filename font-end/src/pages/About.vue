<template>
  <div>
    <Banner/>
    <Teamshow/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Banner: require('@/components/Banner3'),
    Teamshow: require('@/components/Teamshow')
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>

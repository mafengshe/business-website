<template>
  <div id="banner">
    <h1 class="desc">
      关于我们<br>
      物联网时代新锐之力
    </h1>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner {
  height: 448px;
  background-image: url(/static/images/banner3.png);
  overflow: hidden;
}

.desc {
  margin: 180px 10%;
  color: var(--blue);
  font-size: 40px;
  font-weight: 700;
}


</style>

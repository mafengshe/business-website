<template>
  <div id="banner">
    <div class="desc">
      首创物联网一站式服务<br>
      助理传统企业智造转型
    </div>
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
  background-image: url(/static/images/banner2.png);
  overflow: hidden;
}

.desc {
  margin: 180px 10%;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
}

#screen1 img{
  width: 60%;
  margin-top: 50px;
}



</style>

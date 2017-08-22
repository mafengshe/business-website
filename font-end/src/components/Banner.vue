<template>
  <div id="banner">
    <h1 class="desc">
      智家<br>
      极具行业创新能力的物联网平台
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
  background-image: url(/static/images/banner.png);
  background: linear-gradient(to right, #2383ea, #6facec);
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

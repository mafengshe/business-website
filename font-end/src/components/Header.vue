<template>
  <header>
    <span class="logo">
      ZhiJia · <span>感受万物智能</span>
    </span>
    <nav>
      <ul>
        <li><router-link :to="{ path: '/' }">首页</router-link></li>
        <li><router-link :to="{ path: '/product' }">产品</router-link></li>
        <li><router-link :to="{ path: '/blog' }">博客</router-link></li>
        <li><router-link :to="{ path: '/about' }">关于</router-link></li>
      </ul>
    </nav>
    <div class="phone-wrapper">
      <img src="static/images/电话.svg" alt="" height="28px">
      <a href="tel:4008001234">4008001234</a>
    </div>
    
  </header>
  
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 60px;
  line-height: 60px;
  background: #000;
  overflow: hidden;
}

.logo {
  color: #fdd300;
  font-size: 22px;
  margin-left: 12%;
}

.logo span{
  font-size: 16px;
  color: #fff;
}

nav {
  display: inline-block;
  color: #fff;
  margin-left: 12%;
}

nav a{
  color: #fff;
}

nav ul li {
  margin-left: 20px;
}

.phone-wrapper {
  /* position: absolute; */
  float: right; 
  /* top: 10px; */
  margin-right: 15%;
}

.phone-wrapper img{
  position: absolute;
  top: 17px;
}

.phone-wrapper a{
  color: #fff;
  margin-left: 40px;
}




</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

axios.defaults.baseURL = 'http://127.0.0.1:3000/' // 配置接口地址
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.axios = axios           // 使用axios替换Vue模块

import '@/assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

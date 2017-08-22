import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index')
    },
    {
      path: '/product',
      name: 'product',
      component: require('@/pages/Product'),
      meta: [ '页面管理', '产品页编辑' ]
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/pages/About'),
      meta: [ '页面管理', '关于页编辑' ]
    }

  ]
})

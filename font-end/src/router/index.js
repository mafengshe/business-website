import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/Home')
    },
    {
      path: '/product',
      name: 'product',
      component: require('@/pages/Product')
    },
    {
      path: '/blog',
      name: 'blog',
      component: require('@/pages/Blog')
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/pages/About')
    }
  ]
})

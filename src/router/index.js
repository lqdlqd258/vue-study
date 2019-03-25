import Vue from 'vue'
import Router from 'vue-router'
import goodslist from '@/views/goodslist'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'goodslist',
      component: goodslist
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad,{
  loading:"./static/loading-svg/loading-bars.svg"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

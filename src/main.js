// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/common/common.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import modal from '@/plugin/modal.js'

Vue.use(modal)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

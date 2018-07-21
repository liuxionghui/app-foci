import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store/index.js'

// import '../public/js/iscroll-probe.js'


import FociContent from './common/FociContent.vue'
Vue.component('foci-content',FociContent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

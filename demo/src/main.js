import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import axios from 'axios' //引入axios组件 
//import qs from "qs" //引入qs库

Vue.prototype.$axios = axios //使用axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

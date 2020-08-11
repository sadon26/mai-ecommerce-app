import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import axios from 'axios'

axios.defaults.baseURL = "https://dry-wildwood-70605.herokuapp.com/api/v1"

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

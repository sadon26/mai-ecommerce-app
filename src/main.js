import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = "https://dry-wildwood-70605.herokuapp.com/api/v1"

Vue.filter('toCurrency', (val) => {
  let number = String(val), 
  naira = number.split('.')[0], 
  kobo = (number.split('.')[1] || '') +'00';
  naira = naira.split('').reverse().join('')
      .replace(/(\d{3}(?!$))/g, '$1,')
      .split('').reverse().join('');
  return '₦' + naira + '.' + kobo.slice(0, 2);
})


Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$uuid = uuidv4();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

const token = store.getters.user.token;

const validateToken = (token) => {
  const interval = setInterval(() => {
    const decoded = jwt_decode(token);
    const date = new Date();
    const currentDate = Number(String(date.getTime()).slice(0, 10));
    if(currentDate >= decoded.exp) {
      alert('token has expired');
      clearInterval(interval);
    }
  }, 1000);
}

validateToken(token)

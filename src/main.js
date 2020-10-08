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
  watch: {
    '$store.getters.user'(newValue) {
      if (this.$store.getters.user) {
        refreshToken()      
      }
      console.log('hello');
    }
  },
  render: h => h(App)
}).$mount('#app')

export const eventBus = new Vue({})

function refreshToken() {
  const interval = setInterval(() => {
    if (store.getters.user) {
      const token = store.getters.user.token;
      const decoded = jwt_decode(token);
      const date = new Date();
      const currentDate = Number(String(date.getTime()).slice(0, 10));
      const $1min = 60
      if (currentDate >= (decoded.exp - $1min)) {
        console.log(decoded.exp - $1min, currentDate)
        const config = { headers: { token } }
        axios.get('/token', config)
        .then(res => {
          console.log(res.data.token)
          store.commit('refreshToken', res.data.token);
        })
        .catch(err => console.log(err))        
      }
    }
  }, 1000);
}


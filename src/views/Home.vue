<template>
  <div>
    <carousel 
    class="carousel-wrapper"
      :autoplay="true"
      :per-page="1" 
      :autoplayTimeout="3000"
      :loop="true"
      :paginationEnabled="false"
      :autoplayLoop="true"
      :mouse-drag="true">
      <slide>
        <div class="home-sliding-image">
          <img src="../assets/images/159f9445810637.583de7ff14000.jpg" alt="">
        </div>
      </slide>
      <slide>
        <div class="home-sliding-image">
          <img src="../assets/images/836e2545810637.583de7ff171df.jpg" alt="">
        </div>
      </slide>
      <slide>
        <div class="home-sliding-image">
          <img src="../assets/images/ab024c45810637.583de7ff11d94.jpg" alt="">
        </div>
      </slide>
      <slide>
        <div class="home-sliding-image">
          <img src="../assets/images/d74f0945810637.583de7ff13955 .jpg" alt="">
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios';
import { store } from '../store/store'

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },
  beforeRouteEnter(to, from, next) {
    if(to.query) {
      const token = to.query.token;
      if(token) {
        let config = { headers: { token } };
        axios.get('/auth/userdetails', config)
          .then(res => {
            console.log(res);
            store.dispatch('signinWithGoogle', {res, token});
            store.dispatch('getAllCartItems', token)
            store.dispatch('getAllWishLists', token)
          })
            .catch(err => console.log(err));
      }
    next()
    } else {
      next('/')
    }
  },
  destroyed() {
    store.commit('loginSuccessPopup', false);
  }
}
</script>
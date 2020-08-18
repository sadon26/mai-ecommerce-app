<template>
<div class="home">
  <transition name="slide" mode="out-in">
    <LoginSuccessPopup />
  </transition>
  <transition name="slide" mode="out-in">
    <ItemAddedPopup />
  </transition>
  <transition name="move" mode="out-in">
    <WishListAddedPopup />
  </transition>
  <NavBar @getProducts="getProducts($event)" />
  <router-view />
  <Login v-if="loginModal" />
  <div class="cart-and-wishlist-wrap">
    <router-link :to="{ path: '/cart' }" v-if="isLoggedIn" class="cart-icon">
      <img src="../assets/images/shopping-cart.png" alt="shopping-cart">
      <div v-if="cartItems.length" class="items-in-cart">
        {{ cartItems.length }}
      </div>
    </router-link>
    <div v-if="isLoggedIn" @click="$store.dispatch('showHideWishList', true)" class="wishlist-icon">
      <img v-if="!wishList.length" src="../assets/images/wishlist-icon.svg">
      <img class="heart-animated" v-if="wishList.length" src="../assets/images/full-heart-icon.png">
      <div v-if="wishList.length" class="items-in-cart">
        {{ wishList.length }}
      </div>
    </div>
  </div>
  <Footer />
    <WishList v-if="showHideWishList" />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
import LoginSuccessPopup from '@/components/Popup/loginSuccessPopup'
import ItemAddedPopup from '@/components/Popup/itemAddedPopup'
import WishListAddedPopup from '@/components/Popup/wishListAddedPopup'
import WishList from '@/components/WishList'

export default {
  data() {
    return {
      showWishList: false,
    }
  },
  name: 'Landing',
  components: {
    NavBar,
    Login,
    LoginSuccessPopup,
    ItemAddedPopup,
    WishListAddedPopup,
    WishList,
    Footer,
  },
  computed: {
    ...mapGetters({
      loginModal: 'loginModal',
      loginSuccessPopup: 'loginSuccessPopup',
      isLoggedIn: 'isLoggedIn',
      cartItems: 'cartItems',
      wishList: 'wishList',
      showHideWishList: 'showHideWishList',
    })
  },
  created() {
    this.getProductCategories()
    if (this.$store.getters.isLoggedIn) {
      const token = this.$store.getters.user.token;
      this.$store.dispatch('getAllWishLists', token);
      this.$store.dispatch('getAllCartItems', token);
    }
  },
  methods: {
    ...mapActions([
      'getProductCategories',
      'getProducts',
      'addToWishList',
    ]),
  },
}
</script>

<style lang="scss">
@import '../assets/scss/home';
</style>
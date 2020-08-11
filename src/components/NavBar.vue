<template>
    <div class="nav-bar">
    <div class="home-logo">
      <p class="home-logo__text">Mai</p>
      <div class="__logo">
        <img src="../assets/images/processed.png" alt="">
      </div>
    </div>
    <nav class="home-nav">
      <div class="home-nav-wrapper-item">
        <div class="home-nav__wrapper">
          <router-link class="home-nav__wappper-links" :to="{path: '/'}">HOME</router-link>
          <router-link class="home-nav__wappper-links" :to="{path: '/about'}">ABOUT</router-link>
          <a class="home-nav__wappper-links __cat">
            <p class="__text">CATEGORIES</p>
            <div class="home-nav__arrow-down">
              <img src="../assets/images/arrow-down.svg" alt="arrow-down">
            </div>
            <ul v-if="categories" class="categories-dropdown">
              <router-link :to="{ path: `/categories/${category.name}`}"
                class="categories-dropdown__category" 
                v-for="(category, index) in categories" :key="index">
                  <li class="categories-dropdown__category__text" @click="getProducts(category)" >{{ category.name }}</li>
              </router-link>
            </ul>
            <ul v-if="!categories.length" class="categories-dropdown">
              <div class="categories-dropdown__category">
                  <li class="categories-dropdown__category__text">Loading...</li>
              </div>
            </ul>
          </a>
        </div>
        <div class="search-product">
          <div class="search-product__wrapper">
            <div class="search-product__wrapper-left">
              <router-link v-if="!isLoggedIn" :to="{ path: '/signup' }">Sign up</router-link>
              <router-link v-else :to="{ path: '/signup' }"> 
                <p @click="logout" class="logout-from-home">Logout</p>
              </router-link>
              <p v-if="!isLoggedIn" @click="toggleLoginModal(true)">Log in</p>
              <p style="color: #DF4D97" v-else>Hi, {{ userInfo.first_name }}</p>
            </div>
            <input @keyup.enter="search(searchProduct)" type="text" v-model="searchProduct" placeholder="Search for a product">
            <div @click="search(searchProduct)" class="search-icon">
              <img src="../assets/images/search-icon.png" alt="search-icon">
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Login v-if="loginModal" />
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Login,
  },
  computed: {
    searchProduct: {
      get() {
        return this.$store.getters.searchProduct
      },
      set(value) {
        this.$store.dispatch('updateSearchProduct', value);
      },
    },
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      loginModal: 'loginModal',
      userInfo: 'user',
      categories: 'getProductCategories'
    })
  },
  methods: {
    ...mapActions([
      'search',
      'getProducts',
      'toggleLoginModal',
    ]),
    logout() {
      this.$router.push({ path: '/login' })
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style lang="scss">
@import "../assets/scss/navbar";
</style>
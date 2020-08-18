<template>
<div class="product-overview-wrapper">
  <div class="product-overview">
    <div @click="hideProductOverview" class="cancel-icon">
      <img src="../assets/images/cancel-black.svg" alt="cancel-icon">
    </div>
    <div class="product-overview-heading">
      <p>{{ productOverview.product_name }}</p>
      <p>{{ productOverview.price | toCurrency }}</p>
    </div>
    <div class="product-description">
      {{ productOverview.product_description }}
    </div>
    <div class="product-add-btn">
      <button @click="addToCart(productOverview)" class="add-to-cart">Add to Cart</button>
      <button @click="addToWishList(productOverview)" class="add-to-wishlist">Add to Wishlist</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'productOverview',
      ])
    },
    methods: {
      ...mapActions([
        'hideProductOverview',
      ]),
      addToCart(productOverview) {
        if (this.$store.getters.isLoggedIn) {
          const token = this.$store.getters.user.token;
          this.$store.dispatch('addToCart', { productOverview, uuid: this.$uuid, token })
        } else {
          this.$store.dispatch('toggleLoginModal', true)
        }
      },
      addToWishList(productOverview) {
        if (this.$store.getters.isLoggedIn) {
          const token = this.$store.getters.user.token;
          this.$store.dispatch('addToWishList', {productOverview, token});
          console.log("ds")
        } else {
          this.$store.dispatch('toggleLoginModal', true)
        }
      },
    },
  }
</script>

<style lang="scss">
@import '../assets/scss/productOverview';
</style>
<template>
<div @click="hideProductModal" class="product-overview-wrapper">
  <div class="product-overview">
    <div @click="showProductOverview" class="cancel-icon">
      <img src="../assets/images/cancel-black.svg" alt="cancel-icon">
    </div>
    <div class="product-overview-heading">
      <p>{{ productOverview.product_name !== undefined || null ? productOverview.product_name : productOverview.product }}</p>
      <p>{{ productOverview.price | toCurrency }}</p>
    </div>
    <div class="product-description">
      {{ productOverview.product_description !== undefined || null ? productOverview.product_description : productOverview.description }}
    </div>
    <div class="product-add-btn">
      <button @click="addToCart(productOverview)" class="add-to-cart">Add to Cart</button>
      <button @click="addToWishList(productOverview)" class="add-to-wishlist">Add to Wishlist</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'productOverview',
      ])
    },
    methods: {
      ...mapMutations([
        'hideProductOverview'
      ]),
      showProductOverview() {
        this.$emit('showProductOverview')
      },
      hideProductModal(e) {
        if(e.target.classList[0] === "product-overview-wrapper") {
          this.showProductOverview()
        }
      },
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
        } else {
          this.$store.dispatch('toggleLoginModal', true)
        }
      },
    },
    destroyed() {
      this.hideProductOverview()
    }
  }
</script>

<style lang="scss">
@import '../assets/scss/productOverview';
</style>
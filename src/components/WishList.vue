<template>
  <div class="wish-list hide-wish-list" @click="hideWishList">

    <div class="wish-list-wrapper">

      <div class="wish-list-heading">
        <p class="wish-list-heading__text">Wish List</p>
        <div class="wish-list-cancel hide-wish-list">
          <img class="hide-wish-list" src="../assets/images/cancel-icon-pink.svg" alt="">
        </div>
      </div>
      <div v-if="wishList.length > 0" class="wishlist-items">
        <div class="wishlist-items-wrapper"  v-for="(item, index) in wishList" :key="index">
          <div class="wishlist-items__image">
            <img :src="item.product_image" alt="">
          </div>
          <div class="wishlist-items-details">
            <p class="wishlist-items-details__name">{{ item.product_name }}</p>
            <p class="wishlist-items-details__price">{{ item.price | toCurrency }}</p>
            <div class="wishlist-add-delete-btns">
              <button @click="moveToCart(item)">Add to Cart</button>
              <button @click="deleteWishList(item)">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="no-wishlists" v-if="wishList.length === 0">
        <p>No wishlists to show...</p>
      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'wishList'
      ])
    },
    methods: {
      deleteWishList(item) {
        const token = this.$store.getters.user.token;
        if(confirm(`Are you sure you want to delete ${item.product_name}`)) {
          this.$store.dispatch('deleteWishList', {token, item})
        }
      },
      moveToCart(item) {
        const token = this.$store.getters.user.token;
        this.$store.dispatch('moveToCart', {token, item})
      },
      hideWishList(e) {
        if(e.target.classList[0] === "wish-list" || e.target.classList[0] === "wish-list-cancel" || e.target.classList[0] === "hide-wish-list") {
          this.$emit('hideWishList', false);
        }
      }
    },
  }
</script>

<style lang="scss">
@import '../assets/scss/wishList';
</style>
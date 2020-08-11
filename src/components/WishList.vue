<template>
  <div class="wish-list">
  <transition name="slide-from-side" mode="out-in">
    <div class="wish-list-wrapper">
      <div class="wish-list-heading">
        <p class="wish-list-heading__text">Wish List</p>
        <div @click="$store.dispatch('showHideWishList', false)" class="wish-list-cancel">
          <img src="../assets/images/cancel-icon-pink.svg" alt="">
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
@import '../assets/scss/wishList';
</style>
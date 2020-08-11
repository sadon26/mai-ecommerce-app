<template>
  <div class="wishlist-added-popup" v-if="wishListAddedPopup">
    <p>{{ wishListMessage }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'loginSuccessPopup',
    computed: {
      ...mapGetters([
        'wishListAddedPopup',
        'wishListMessage',
      ])
    },
  }
</script>
<template>
  <div class="item-added-popup" v-if="itemAddedPopup">
    <p>Item added to cart</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'itemAddedPopup',
    computed: {
      ...mapGetters([
        'itemAddedPopup',
      ])
    },
  }
</script>
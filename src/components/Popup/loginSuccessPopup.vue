<template>
  <div class="login-success-popup" v-if="loginSuccessPopup">
    <p>Logged in successfully</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'loginSuccessPopup',
    computed: {
      ...mapGetters([
        'loginSuccessPopup',
      ])
    },
  }
</script>
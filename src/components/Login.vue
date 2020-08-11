<template>
<div class="form-wrapper">
  <form @submit.prevent="submit" class="right">

      <div class="second">
          <label for="">Email address</label>
          <input v-model="email" type="text" placeholder="Yourmail@mail.com" required>
      </div>

      <div class="fourth">
          <label for="">Password</label>
          <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" required>
          <p class="show-password" @click="showPassword = !showPassword">Show password</p>
      </div>

      <a href="http://dry-wildwood-70605.herokuapp.com/google" class="sign-up-with-google">
        <div @click="toggleLoginModal(false)" class="sign-up-with-google__wrapper">
          <p class="__text">Or Sign in with Google</p>
          <div class="sign-up-with-google__logo">
              <img src="../assets/images/google-logo.png" alt="google-icon">
          </div>
        </div>
      </a>
      <p class="signup-err__message" v-if="errorMessage">{{ errorMessage }}</p>
      <button 
        class="signup-submit__btn" 
        :disabled="loginLoading" 
        v-if="!loginLoading">
        Login
      </button>
      <div v-else class="rolling-spinner">
          <div class="rolling-spinner__image">
              <img src="../assets/images/rolling-spinner.svg" alt="">
          </div>
      </div>
  </form>
  <div @click="toggleLoginModal(false)" class="modal-cancel">
    <img src="../assets/images/cancel.svg" alt="cancel-icon">
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      phone_number: '',
      showPassword: false,
    }
  },
  computed: {
      ...mapGetters([
          'loginLoading',
          'errorMessage',
          'verifyAcctDisplay',
      ])
  },
  methods: {
    toggleLoginModal(data) {
        this.$store.dispatch('toggleLoginModal', data)
    },
    submit() {
      const user = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('login', user);
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/login";
</style>
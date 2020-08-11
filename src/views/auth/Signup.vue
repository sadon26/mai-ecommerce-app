<template>
  <div>
      <div class="container">
        <nav>
            <router-link :to="{ path: '/' }">Mai</router-link>
            <div>
                <p>Already have an account?</p>
                <p @click="toggleLoginModal(true)" class="login-from-signup">Login</p>
            </div>
        </nav>

        <div class="below-nav">
            <div class="left">
                <div>
                    <img src="../../assets/images/pills.svg" alt="pills">
                </div>
                <h1>Get started</h1>
                <p>You’re just a few moments away from switching to a better, simpler pharmacy. Let’s start with some contact information and selecting a password.</p>
            </div>
            <form @submit.prevent="signup" class="right">
                <div class="first">
                    <div>
                        <label for="">First name</label>
                        <input v-model="first_name" type="text" placeholder="John"  required>
                    </div>
                    <div>
                        <label for="">Last name</label>
                        <input v-model="last_name" type="text" placeholder="Doe" required>
                    </div>
                </div>

                <div class="second">
                    <label for="">Email address</label>
                    <input v-model="email" type="text" placeholder="Yourmail@mail.com" required>
                </div>

                <div class="third">
                    <label for="">Phone number</label>
                    <input v-model="phone_number" type="text" placeholder="80 - 734 - 04890" required>
                    <div class="left-side">
                        <div>
                            <img src="../../assets/images/nigeria.svg" alt="">
                        </div>
                        <p>(+234)</p>
                    </div>
                </div>

                <div class="fourth">
                    <label for="">Create password</label>
                    <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" required>
                    <p class="show-password" @click="showPassword = !showPassword">Show password</p>
                </div>

                <a href="http://dry-wildwood-70605.herokuapp.com/google" target="__blank" class="sign-up-with-google">
                    <p class="__text">Or Sign up with Google</p>
                    <div class="sign-up-with-google__logo">
                        <img src="../../assets/images/google-logo.png" alt="google-icon">
                    </div>
                </a>
                <div class="fifth">
                    <input v-model="checked" type="checkbox">
                    <p>I agree to Terms and Conditions. See Privacy and Cookie Policy for information on how we use the the information you provide to us.</p>
                </div>
                <p class="signup-err__message" v-if="errorMessage">{{ errorMessage }}</p>
                <button class="signup-submit__btn" 
                    :disabled="isLoading || !checked" 
                    v-if="!isLoading" :class="{not_checked : !checked}">
                    Create Account
                </button>
                <div v-else class="rolling-spinner">
                    <div class="rolling-spinner__image">
                        <img src="../../assets/images/rolling-spinner.svg" alt="">
                    </div>
                </div>
            </form>
            <div class="verify-acct-display" v-if="verifyAcctDisplay">
                <div class="verify-acct-display__wrapper">
                    <p>Account created successfully. <br>Check your email and verify account</p>
                    <button @click="verified" class="verify-acct-display__button">OK</button>
                </div>
            </div>
        </div>
    </div>

    <div class="above-footer">
        <div class="wrapper">
            <div class="first">
                <div class="image">
                    <img src="../../assets/images/noun-badge-1563220.svg" alt="">
                </div>
                <div>
                    <h1>Reliable</h1>
                    <p>All products displayed on 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</p>    
                </div>
            </div>
            <div class="second">
                <div class="image">
                    <img src="../../assets/images/noun-bag-check-1622114.svg" alt="">
                </div>
                <div>
                    <h1>Secure</h1>
                    <p>Express pharmacy uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</p>        
                </div>
            </div>
            <div class="third">
                <div class="image">
                    <img src="../../assets/images/noun-wallet-1564321.svg" alt="">
                </div>
                <div>
                    <h1>Affordable</h1>
                    <p>Enjoy 20% off on allopathy medicines, up to 50% off on health products, up to 80% off on lab tests and free doctor consultations</p>    
                </div>
            </div>
        </div>
        <Login v-if="loginModal" />
     </div>
     <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Login from "@/components/Login.vue"
import { mapGetters } from 'vuex'

export default {
    components: {
        Footer,
        Login,
    },
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone_number: '',
            showPassword: false,
            checked: false,
        }
    },
    computed: {
        ...mapGetters([
            'isLoading',
            'errorMessage',
            'verifyAcctDisplay',
            'loginModal',
        ])
    },
    methods: {
        signup() {
            const userDetails = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                phone_number: this.phone_number,
            }
            this.$store.dispatch('signup', userDetails);
        },
        verified() {
            this.$router.push({ path: '/' });
        },
        toggleLoginModal(data) {
            this.$store.dispatch('toggleLoginModal', data)
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/scss/signup";
</style>
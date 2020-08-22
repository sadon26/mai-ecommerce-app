<template>
  <div class="checkout__wrapper">
    <div class="checkout">
      <div class="address__n__subtotal">
        <div class="checkout-address">

          <div class="checkout-address-heading">
            <div v-if="address.length === 0" class="checkout-address-heading-image">
              <img src="../assets/images/check-grey.svg" alt="check-grey">
            </div>
            <div v-else class="checkout-address-heading-image">
              <img src="../assets/images/check-green.svg" alt="check-grey">
            </div>
            <p class="checkout-address-heading-text">ADDRESS</p>
          </div>

          <div v-if="address.length === 0" class="checkout-no-address-details">
            <div class="checkout-address-details-body">
              Add an address
            </div>
          </div>
          <div v-else class="checkout-address-details">
              <div class="checkout-address-details-full-name">{{ defaultAddress[0].first_name }} {{ defaultAddress[0].last_name }}</div>
              <div class="checkout-address-details-location">
                <div>{{ defaultAddress[0].address }}</div>
                <div>{{ defaultAddress[0].mobile_number }}</div>
                <div v-if="defaultAddress[0].additional_mobile_number">{{ defaultAddress[0].additional_mobile_number }}</div>
              </div>
          </div>

          <div @click="showEditAddress(true)" class="edit-icon-box">
            <div class="edit-icon">
              <img src="../assets/images/edit-icon.svg" alt="edit-icon">
            </div>
          </div>
        </div>
        <div class="checkout-subtotal">
          lmsf
        </div>
      </div>
    </div>

    <div v-if="addressSpinnerLoading" class="updating-address-spinner-bg">
      <div class="updating-address-spinner">
        <img src="../assets/images/rolling-spinner.svg" alt="rolling-spinner">
      </div>
    </div>

    <EditAddress :defaultAddress="defaultAddress" v-if="showEditAddressBox"/>
  </div>
</template>

<script>
import EditAddress from '../components/EditAddress'

import { store } from '../store/store'
import router from '../router/index'
import { mapGetters } from 'vuex';

  export default {
    components: {
      EditAddress,
    },
    computed: {
      ...mapGetters([
        'address',
        'showEditAddressBox',
        'addressSpinnerLoading',
      ]),
      defaultAddress() {
        const defaultAddress = this.address.filter(data => data.is_default === "true");
        return defaultAddress
      },
    },
    beforeRouteEnter(to, from, next) {
      store.getters.isLoggedIn ? next() : router.push({ path: '/signup' })
    },
    created() {
      window.scrollY = 0;
      const token = this.$store.getters.user.token;
      this.$store.dispatch('getAddress', token);
      this.getStates();
      this.$store.commit('showEditAddressBox', false);
      this.$store.commit('editAddressDetails', null);
      this.$store.commit('showAddAddress', false);
      this.defaultAddress
    },
    methods: {
      getStates() {
        this.$axios.get('http://locationsng-api.herokuapp.com/api/v1/lgas')
          .then(res => {
            console.log(res.data)
            this.$store.commit('statesAndLga', res.data);
            this.$store.commit('lgas');
          })
            .catch(err => console.log(err))
      },
      showEditAddress(payload) {
        this.$store.commit('showEditAddressBox', payload)
      }
    },
  }
</script>

<style lang="scss">
@import '../assets/scss/checkout';
</style>
<template>
<div class="add__new-address-wrapper">
  <form @submit.prevent="!editAddressDetails ? submitAddress() : updateAddress()" class="add__new-address">
    <p v-if="!editAddressDetails" class="add__new-address-heading">ADD ADDRESS</p>
    <p v-else class="add__new-address-heading">EDIT ADDRESS</p>
    <div class="add__first-n-last-name">
      <div class="add__first-name">
        <label for="">First name *</label>
        <input v-model="first_name" placeholder="First name" type="text" required>
      </div>
      <div class="add__last-name">
        <label for="">Last name *</label>
        <input v-model="last_name" placeholder="Last name" type="text" required>
      </div>
    </div>

    <div class="add__mobile-number">
      <label for="">Mobile number *</label>
      <div class="add__mobile-number-input">
        <div class="add__mobile-number-input-left">234</div>
        <input v-model="mobile_number" placeholder="08022123123" class="add__mobile-number-input-right" type="number" required>
      </div>
    </div>

    <div @click="showAdditionalPhoneNo = true" class="show__additional-phone-no" v-if="!showAdditionalPhoneNo">
      <div class="show__additional-phone-no-add"><span>+</span></div>
      <p class="show__additional-phone-no-add-second">Add a second phone number</p>
    </div>
    <div v-if="showAdditionalPhoneNo" class="additional__mobile-number">
      <label for="">Additional mobile number *</label>
      <div class="add__mobile-number-input">
        <div class="add__mobile-number-input-left">234</div>
        <input v-model="additional_mobile_number" placeholder="08022123123" class="add__mobile-number-input-right" type="number">
      </div>
    </div>

    <div class="add__address">
      <label>Address *</label>
      <div class="add__address-input">
        <textarea required placeholder="Street Name/Building/Apartment No./Floor" v-model="address" class="add__address-input-right" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>

    <div class="address-for-state">
      <label>State/Region *</label>
      <select
      required
        class="address-for-state"
        @change="selectState"
        v-model="state_region"
      >
        <option selected v-for="(data, index) in statesAndLga" :key="index">{{ data.alias }}</option>
      </select>
    </div>

    <div class="address-for-city">
      <label>City *</label>
      <select
      required
        class="address-for-state"
        @change="selectState"
        v-model="city"
      >
        <option selected v-for="(data, index) in lgas" :key="index">{{ data }}</option>
      </select>
    </div>
    <button v-if="!editAddressDetails" class="btn__save-address-details">SAVE</button>
    <button v-else class="btn__save-address-details">UPDATE</button>
  </form>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        showAdditionalPhoneNo: false,
        state_region: 'adamawa',
        first_name: '',
        last_name: '',
        mobile_number: '',
        additional_mobile_number: '',
        address: '',
        city: '',
      }
    },
    computed: {
      ...mapGetters([
        'statesAndLga',
        'lgas',
        'editAddressDetails',
        'showAddAddress',
      ]),
    },
    methods: {
      selectState() {
        console.log(this.lgas)
        this.$store.commit('updateSelectedLga', this.state_region);
      },
      submitAddress() {
        const token = this.$store.getters.user.token
        const addressDetails = {
          state_region: this.state_region,
          first_name: this.first_name,
          last_name: this.last_name,
          mobile_number: this.mobile_number,
          additional_mobile_number: this.additional_mobile_number,
          address: this.address,
          city: this.city,
        }
        this.$store.dispatch('addAddress', {addressDetails, token});
      },
      updateAddress() {
        const token = this.$store.getters.user.token
        const addressDetails = {
          state_region: this.state_region,
          first_name: this.first_name,
          last_name: this.last_name,
          mobile_number: this.mobile_number,
          additional_mobile_number: this.additional_mobile_number,
          address: this.address,
          city: this.city,
          id: this.editAddressDetails.data.id
        }
        console.log(addressDetails)
        this.$store.dispatch('updateAddress', {addressDetails, token});
      }
    },
    watch: {
      editAddressDetails: {
        handler(value) {
          if(value) {
            console.log(value, this.editAddressDetails.data);
            this.state_region = value.data.state_region
            this.first_name = value.data.first_name
            this.last_name = value.data.last_name
            this.mobile_number = value.data.mobile_number
            this.additional_mobile_number = value.data.additional_mobile_number
            this.address = value.data.address
            this.city = value.data.city
          }
          this.$store.commit('updateSelectedLga', value.data.state_region)
        },
        immediate: true,
      },
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/addAddress";
</style>
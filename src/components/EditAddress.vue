<template>
  <div class="edit__address">
    <div class="edit__address-container">
      <addAddress v-if="address.length === 0"/>
      <div v-else>
        <addAddress v-if="showAddAddress"/>

        <div class="all_addresses" v-else>
          <p class="address__book-heading">Address Book</p>
          <div @click="showAddAddressDetail(true)" class="add__new-address-btn">
            <div class="add__new-address-btn--plus"><span>+</span></div>
            <span class="add__new-address-btn--text">ADD A NEW ADDRESS</span>
          </div>
          <div class="all__addresses-wrapper">

            <p class="all__addresses-default">DEFAULT ADDRESS</p>
            <div class="default-address-details">
              <input name="address" class="default-address-details-input" v-model="selectedAddress" :value="defaultAddress[0].id" type="radio">
              <div class="default-address-details-wrapper">
                <div>
                  <div class="default-address-full-name">{{ defaultAddress[0].first_name }} {{ defaultAddress[0].last_name }}</div>
                  <div class="default-address-location">
                    <div>{{ defaultAddress[0].address }}</div>
                    <div>{{ defaultAddress[0].mobile_number }}</div>
                    <div v-if="defaultAddress[0].additional_mobile_number">{{ defaultAddress[0].additional_mobile_number }}</div>
                  </div>
                </div>
                <div class="address-edit-and-remove">
                  <p @click="editAddress(defaultAddress[0].id)">Edit</p>
                </div>
              </div>
            </div>

            <p class="all__addresses-default">SAVED ADDRESSES</p>
            <div class="default-address-details" v-for="(addresses, index) in savedAddresses" :key="index">
              <input
              class="default-address-details-input" 
              v-model="selectedAddress"
              :value="addresses.id"
              name="address"
              type="radio">
              <div class="default-address-details-wrapper">
                <div>
                  <div class="default-address-full-name">{{ addresses.first_name }} {{ addresses.last_name }}</div>
                    <div class="default-address-location">
                      <div>{{ addresses.address }}</div>
                      <div>{{ addresses.mobile_number }}<span v-if="addresses.additional_mobile_number">, {{ addresses.additional_mobile_number }}
                        </span>
                      </div>

                    </div>
                </div>
                <div class="address-edit-and-remove">
                  <p @click="editAddress(addresses.id)">Edit</p>
                  <p @click="removeAddress(addresses.id)">Remove</p>
                </div>
              </div>
            </div>

          </div>
          <button @click="saveAsDefaultAddress" class="save-address-as-default">SAVE AS DEFAULT ADDRESS</button>
        </div>

      </div>
      <div @click="hideEditAddress(false)" class="cancel__edit-address-wrapper">
        <div class="cancel__edit-address-icon">
          <img src="../assets/images/cancel-black.svg" alt="cancel-black-icon">
        </div>
      </div>

        <div v-if="addressSpinnerLoading" class="updating-address-spinner-bg">
          <div class="updating-address-spinner">
            <img src="../assets/images/rolling-spinner.svg" alt="rolling-spinner">
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import addAddress from './addAddress'

  export default {
    data() {
      return {
        selectedAddress: this.defaultAddress[0].id,
      }
    },
    props: ['defaultAddress'],
    name: 'EditAddress',
    components: {
      addAddress,
    },
    methods: {
      hideEditAddress() {
        this.$store.commit('showEditAddressBox', false);
        this.$store.commit('showAddAddress', false);
        this.$store.commit('editAddressDetails', null);
      },
      showAddAddressDetail(payload) {
        this.$store.commit('showAddAddress', payload)
      },
      removeAddress(id) {
        const token = this.$store.getters.user.token
        this.$store.dispatch('removeAddress', { id, token })
      },
      editAddress(id) {
        const token = this.$store.getters.user.token
        this.$store.dispatch('editAddress', {id, token})
      },
      saveAsDefaultAddress() {
        const token = this.$store.getters.user.token
        this.$store.dispatch('saveAsDefaultAddress', { id: this.selectedAddress, token })
      }
    },
    computed: {
      ...mapGetters([
        'address',
        'addressSpinnerLoading',
        'showEditAddressBox',
        'showAddAddress',
      ]),
      savedAddresses() {
        const savedAddresses = this.address.filter(data => data.is_default === "false");
        return savedAddresses
      }
    },
  }
</script>

<style lang="scss">
@import "../assets/scss/editaddress";
</style>
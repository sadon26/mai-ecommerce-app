<template>
<div class="cart__wrapper">
  <div v-if="loadingCart" class="loading-cart">
    <div class="loading-cart-image">
      <img src="../assets/images/rolling-spinner.svg" alt="rolling-spinner">
    </div>
  </div>
  <div class="cart">
    <div v-if="cartItems.length" class="cart__heading">
      <div class="cart__heading-rect"></div>
      <p class="cart__heading-text">
        {{ quantityInCart > 1 ? `Cart(${quantityInCart} items)` : `Cart(${quantityInCart} item)` }}
      </p>
    </div>
    <div class="cart__empty" v-if="!cartItems.length">
      <div class="cart__empty-image">
        <img src="../assets/images/empty-cart.svg" alt="empty-cart-icon">
      </div>
      <p class="cart__empty-text">Cart is empty</p>
    </div>
    <div v-if="cartItems.length" class="cart__data">
      <p class="cart__data-heading one">ITEM</p>
      <p class="cart__data-heading two">QUANTITY</p>
      <p class="cart__data-heading three">UNIT PRICE</p>
      <p class="cart__data-heading four">SUB TOTAL</p>
      <div v-for="(item, index) in cartItems" :key="index" 
      class="cart__data-item"
      >
        <div class="cart__description">
          <div class="cart__description-image">
            <img :src="item.product_image" alt="product-image">
          </div>
          <div class="cart__description-texts">
            <p class="cart__description-texts--top">{{ item.category }}</p>
            <p class="cart__description-texts--bottom">{{ item.product_name }}</p>
          </div>
        </div>
        <div class="cart__quantity">
          <select
          @change="updateQuantity({ quantity: selectedQuantity[index], item})"
           class="select-css" v-model.number="selectedQuantity[index]">
            <option 
            v-for="(n, index) in quantity" 
            :key="index"
            >
            {{ n }}
            </option>
          </select>
        </div>
        <div class="cart__unit-price">
          <p class="cart__unit-price-value">{{ item.price | toCurrency }}</p>
        </div>
        <div class="cart__sub-total">
          <p class="cart__unit-price-value total">{{ item.sub_total | toCurrency }}</p>
        </div>
        <div @click="deleteCartItem(item.id)" class="delete__cart" title="Delete item">
          <div class="delete__cart-image">
            <img src="../assets/images/delete-cart.svg" alt="delete-cart-icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        quantity: 10,
        selectedQuantity: [],
      }
    },
    computed: {
      ...mapGetters([
        'cartItems',
        'quantityInCart',
        'loadingCart',
      ]),
    },
    methods: {
      deleteCartItem(id) {
        const token = this.$store.getters.user.token;
          this.$store.dispatch('deleteCartItem', { id, token })
      },
      updateQuantity(data) {
        const token = this.$store.getters.user.token;
        this.$store.dispatch('updateQuantity', {data, token})
      }
    },
    created() {
      if(this.$store.getters.isLoggedIn) {
        this.selectedQuantity = this.cartItems.map(item => item.quantity);
        this.$store.commit('cartQuantity')
      } else {
        this.$router.push({ path: '/signup' })
      }
    },
    watch: {
      cartItems() {
        this.selectedQuantity = this.cartItems.map(item => item.quantity);
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/scss/cart';
</style>
import * as auth from './auth'

export const state = {
  cartItems: [],
  itemAddedPopup: false,
}

export const getters = {
  cartItems: state => state.cartItems,
  itemAddedPopup: state => state.itemAddedPopup,
}

export const mutations = {
  addToCart(state, item) {
    const { product_name, product_image, quantity, price, id } = item;
      state.cartItems.push({ product_name, product_image, quantity, price, id })
  },
  itemAddedPopup: (state, payload) => state.itemAddedPopup = payload,
}

export const actions = {
  addToCart({ commit }, item) {
    commit('addToCart', item);
    commit('itemAddedPopup', true);
    setTimeout(() => commit('itemAddedPopup', false), 5000);
  }
}

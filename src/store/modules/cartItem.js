import axios from 'axios';

export const state = {
  cartItems: [],
  itemAddedPopup: false,
  quantityInCart: null,
  loadingCart: false,
}

export const getters = {
  cartItems: state => state.cartItems,
  itemAddedPopup: state => state.itemAddedPopup,
  quantityInCart: state => state.quantityInCart,
  loadingCart: state => state.loadingCart,
}

export const mutations = {
  addToCart(state, item) {
    const { product_name, product_image, quantity, price, id, sub_total } = item;
      state.cartItems.push({ product_name, product_image, quantity, price, id, sub_total })
      console.log(state.cartItems)
  },
  itemAddedPopup: (state, payload) => state.itemAddedPopup = payload,
  allCartItems(state, allCartItems) {
    console.log(allCartItems)
    state.cartItems = allCartItems
  },
  cartQuantity(state) {
    let quantity = 0;
    state.cartItems.map((item) => {
      quantity += item.quantity
    })
    state.quantityInCart = quantity;
      console.log(quantity)
      console.log(state.quantityInCart)
  },
  loadingCart(state, payload) {
    state.loadingCart = payload
  },
}

export const actions = {
  addToCart({ commit, dispatch }, item) {
    const { productOverview, token, uuid } = item;
    const config = { headers: { token } }
    console.log(token, productOverview.id)
    console.log(uuid)
    axios.post('/cart', { product_id: productOverview.id, order_id: uuid }, config)
    .then(res => {
      console.log(res)
      commit('wishListAddedPopup', true);
      setTimeout(() => commit('wishListAddedPopup', false), 3000);
      dispatch('getAllCartItems', token)
      commit('wishListMessage', `${productOverview.product_name} added to the Cart`);
    })
    .catch(err => {
      console.log(err)
      commit('wishListMessage', err.response.data.message);
      commit('wishListAddedPopup', true);
      setTimeout(() => commit('wishListAddedPopup', false), 3000);
    })
  },
  getAllCartItems({ commit }, token) {
    const config = { headers: { token } }
    axios.get('/cart', config) 
    .then(res => {
      console.log(res)
      commit('allCartItems', res.data.cart)
      commit('cartQuantity')
    })
    .catch(err => console.log(err))
  },
  deleteCartItem({ commit, dispatch }, data) {
    const { id, token } = data;
    const config = { headers: { token } };
    commit('loadingCart', true);
    axios.delete(`/cart/${id}`, config)
    .then(res => {
      commit('loadingCart', false);
      console.log(res);
      dispatch('getAllCartItems', token)
      commit('cartQuantity')
    })
    .catch(err => {
      console.log(err)
      commit('loadingCart', false);
    })
  },
  updateQuantity({ commit, dispatch }, payload) {
    const { data, token } = payload;
    const config = { headers: { token } };
    console.log(data.item.product_name, data.quantity)
    commit('addressSpinnerLoading', true)
    axios.post('/search/product', { product_name: data.item.product_name })
      .then(res => {
        const availableQuantity = res.data.data.quantity
        const requestedQuantity = data.quantity
        console.log(res.data.data.quantity)
        if (requestedQuantity <= availableQuantity) {
          axios.patch('/cart', { id: data.item.id, quantity: requestedQuantity }, config)
          .then(res => {
              commit('addressSpinnerLoading', false)
              console.log(res)
              commit('wishListAddedPopup', true)
              commit('wishListMessage', `Quantity updated successfully`);
              dispatch('getAllCartItems', token)
              setTimeout(() => commit('wishListAddedPopup', false), 3000);
            })
            .catch(err => {
              console.log(err.response.data.message)
              commit('addressSpinnerLoading', false)
            })
          } else {
            commit('wishListAddedPopup', true)
            commit('wishListMessage', `Only ${availableQuantity} quantities left for this product`);
            setTimeout(() => commit('wishListAddedPopup', false), 3000);
            commit('addressSpinnerLoading', false)
          }
        })
        .catch(err => {
          console.log(err.response.data.message)
          commit('addressSpinnerLoading', false)
        })
  }
}

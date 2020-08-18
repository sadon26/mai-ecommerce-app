import axios from 'axios';

export const state = {
  wishLists: [],
  wishListAddedPopup: false,
  wishListMessage: '',
  showWishList: false,
}

export const getters = {
  wishList: state => state.wishLists,
  wishListAddedPopup: state => state.wishListAddedPopup,
  wishListMessage: state => state.wishListMessage,
  showHideWishList: state => state.showWishList,
}

export const mutations = {
  wishListAddedPopup(state, payload) {
    state.wishListAddedPopup = payload;
    console.log(state.wishListAddedPopup)
  },
  getAllWishLists(state, wishLists) {
    console.log(wishLists)
    state.wishLists = wishLists
  },
  wishListMessage(state, payload) {
    state.wishListMessage = payload
    console.log(state.wishListMessage)
  },
  showHideWishList(state, payload) {
    state.showWishList = payload
    console.log(payload)
  }
}

export const actions = {
  addToWishList({ commit, dispatch }, wishListProduct) {
    const { productOverview, token } = wishListProduct;
    const config = { headers: { token } };
    console.log(productOverview.id, token)
    axios.post('/wishlist', { product_id: productOverview.id }, config)
      .then(res => {
        console.log(res)
        commit('wishListAddedPopup', true);
        commit('wishListMessage', `${productOverview.product_name} added to the Wish List`);
        dispatch('getAllWishLists', token)
        setTimeout(() => commit('wishListAddedPopup', false), 3000);
      })
      .catch(err => {
        commit('wishListAddedPopup', true);
        console.log(err)
        commit('wishListMessage', err.response.data.message);
        setTimeout(() => commit('wishListAddedPopup', false), 3000);
      })
    },
  getAllWishLists({ commit }, token) {
    const config = { headers: { token } }
    axios.get('/wishlist', config)
    .then(res => {
      console.log(res)
      commit('getAllWishLists', res.data.wishList);
    })
    .catch(err => console.log('here', err.response.data.message))
  },
  showHideWishList({ commit }, payload) {
    commit('showHideWishList', payload);
  },
  deleteWishList({ commit, dispatch }, payload) {
    const { token, item } = payload
    const config = { headers: { token } }
    console.log(item.id, token)
    axios.delete(`/wishlist/${item.id}`, config)
    .then(res => {
      console.log(res)
      commit('wishListAddedPopup', true);
      commit('wishListMessage', `${item.product_name} has been deleted from the Wish List`);
      dispatch('getAllWishLists', token)
      setTimeout(() => commit('wishListAddedPopup', false), 3000);
    })
    .catch(err => {
      commit('wishListAddedPopup', true);
      console.log(err)
      commit('wishListMessage', err.response.data.message);
      setTimeout(() => commit('wishListAddedPopup', false), 3000);
    })
  },
  moveToCart({ commit }, payload) {
    const { token, item } = payload
    console.log(token, item.id);
    const config = { headers: { token } }
    axios.post('wishlist', { id: item.id }, config)
      .then(res => console.log(res))
        .catch(err => console.log(err.response.data.message))
  }
}

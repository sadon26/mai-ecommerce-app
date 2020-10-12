import axios from 'axios'
import router from '../../router/index'

export const state = {
  searchProduct: '',
  productDetails: null,
  loadingSearch: false
}

export const getters = {
  searchProduct: state => state.searchProduct,
  productDetails: state => state.productDetails,
  loadingSearch: state => state.loadingSearch
}

export const mutations = {
  updateSearchProduct(state, data) {
    return state.searchProduct = data;
  },
  clearSearch(state) {
    state.searchProduct = '';
  },
  productDetails(state, payload) {
    state.productDetails = payload;
  },
  loadingSearch(state, payload) {
    state.loadingSearch = payload
  }
}

export const actions = {
  updateSearchProduct({ commit }, data) {
    commit('updateSearchProduct', data)
  },
  search({ commit }, product) {
    commit('clearSearch')
    commit('loadingSearch', true)
    if(product) {
      axios.post('/search/Product', { product_name: product })
      .then(res => {
        const productName = res.data.data.product;
        console.log(router)
        if(!router.history.current.params.product_name || router.history.current.params.product_name === 'product-not-found') {
          router.push(`/search/${productName}`)
        }
        commit('loadingSearch', false)
        commit('productDetails', res.data.data)
      })
      .catch(err => {
        console.log(router)
        router.push(`/search/product-not-found`)
        commit('loadingSearch', false)
      })
    }
  }
}
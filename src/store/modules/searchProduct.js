import axios from 'axios'

export const state = {
  searchProduct: '',
}

export const mutations = {
  updateSearchProduct(state, data) {
    return state.searchProduct = data;
  },
  clearSearch(state) {
    state.searchProduct = '';
  }
}

export const getters = {
  searchProduct: state => state.searchProduct
}

export const actions = {
  updateSearchProduct({ commit }, data) {
    commit('updateSearchProduct', data)
  },
  search({ commit }, product) {
    commit('clearSearch')
    if(product) {
      axios.post('/search/Product', { product_name: product })
      .then(res => {
        console.log(res);
      })
        .catch(err => console.log(err.response.data.message))
    }
  }
}
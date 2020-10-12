import axios from 'axios'

export const state = {
  categories: [],
  productsInCategory: null,
  errorGettingProduct: null,
  loadingCategorySpinner: false,
}

export const getters = {
  getProductCategories: state => state.categories,
  productsInCategory: state => state.productsInCategory,
  errorGettingProduct: state => state.errorGettingProduct,
  loadingCategorySpinner: state => state.loadingCategorySpinner,
}

export const mutations = {
  setProductCategories(state, categories) {
    state.categories = [...categories]
    console.log(state.categories);
  },
  setProducts(state, productsInCategory) {
    state.productsInCategory = productsInCategory;
  },
  errorGettingProduct(state, errorGettingProduct) {
    state.errorGettingProduct = errorGettingProduct;
    console.log(errorGettingProduct)
  },
  loadingCategorySpinner(state, payload) {
    state.loadingCategorySpinner = payload
  }
}

export const actions = {
  getProductCategories({ commit }) {
    axios.get('/category')
    .then(res => {
      const categories = res.data.data;
      commit('setProductCategories', categories);
    })
     .catch(err => console.log(err))
  },
  getProducts({ commit }, products) {
    commit('errorGettingProduct', null);
    commit('setProducts', null);
    commit('loadingCategorySpinner', true)
    axios.post("/select/product/category", {category: products.name})
    .then(res => {
      console.log(res);
      commit('loadingCategorySpinner', false);
      const productsInCategory = res.data.data;
      commit('setProducts', productsInCategory);
    })
      .catch(err => {
        console.log(err.response.data.message)
        commit('errorGettingProduct', err.response.data.message);
        commit('setProducts', null);
        commit('loadingCategorySpinner', false);
      })
  },
}
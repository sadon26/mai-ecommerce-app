import Vue from 'vue'
import Vuex from  'vuex'
import VuexPersistence from 'vuex-persist'
import * as auth from './modules/auth'
import * as categories from './modules/categories'
import * as searchProduct from './modules/searchProduct'
import * as LoginModal from './modules/loginModal'
import * as productOverview from './modules/productOverview'
import * as cartItem from './modules/cartItem'
import * as wishList from './modules/wishList'

const vuexPersistence = new VuexPersistence({
  storage: localStorage
})

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    categories,
    searchProduct,
    LoginModal,
    productOverview,
    cartItem,
    wishList,
  },
  plugins: [vuexPersistence.plugin],
})
import axios from 'axios';
import router from '../../router/index'
import {initialState} from '../../AuthState/initialState'

export const state = {
  isLoading: false,
  errorMessage: null,
  verifyAcctDisplay: false,
  userDetails: null,
  isLoggedIn: false,
  loginSuccessPopup: false,
  loginLoading: false,
}

export const getters = {
  isLoading: state => state.isLoading,
  errorMessage: state => state.errorMessage,
  verifyAcctDisplay: state => state.verifyAcctDisplay,
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.userDetails,
  loginSuccessPopup: state => state.loginSuccessPopup,
  loginLoading: state => state.loginLoading,
}

export const mutations = {
  signup(state, userDetails) {
    console.log(userDetails);
  },
  isLoading(state, payload) {
    state.isLoading = payload;
  },
  errMessage(state, payload) {
    state.errorMessage = payload;
  },
  verifyAcctDisplay: (state, data) => state.verifyAcctDisplay = data,
  storeUser(state, userData) {
    state.userDetails = { 
      userId: userData.data.data.id,
      token: userData.data.data.token,
      first_name: userData.data.data.first_name,
      last_name: userData.data.data.last_name,
      email: userData.data.data.email,
    }
    state.isLoggedIn = true;
    console.log(state.userDetails, state.isLoggedIn);
  },
  loginLoading(state, payload) {
    state.loginLoading = payload;
  },
  loggedIn(state, payload) {
    state.isLoggedIn = payload
  },
  loginSuccessPopup(state, payload) {
    state.loginSuccessPopup = payload
  },
  logout(state) {
    Object.assign(state, initialState)
  },
  signinWithGoogle(state, userData) {
    const { res, token } = userData
    state.userDetails = { 
      userId: res.data.data.id,
      token,
      first_name: res.data.data.first_name,
      last_name: res.data.data.last_name,
      email: res.data.data.email,
    }
    state.isLoggedIn = true;
    console.log(state.userDetails, state.isLoggedIn);
  }
}

export const actions = {
  signup({ commit, dispatch }, userDetails) {
    commit('isLoading', true);
    commit('errMessage', false);
    axios.post("/auth/register", userDetails)
      .then(res => {
        commit('isLoading', false);
        commit('signup', userDetails);
        commit('verifyAcctDisplay', true);
        dispatch('getAllCartItems', res.data.data.token)
        dispatch('getAllWishlists', res.data.data.token)
        commit('storeUser', res);
        console.log(res)
      })
      .catch(err => {
        console.log(err.response.data.message);
        commit('errMessage', err.response.data.message);
        commit('isLoading', false);
      })
  },
  login({ commit, dispatch }, userData) {
    commit('loginLoading', true);
    commit('errMessage', false);
    axios.post("/auth/login", userData)
      .then(res => {
        commit('loginLoading', false);
        commit('storeUser', res);
        setTimeout(() => {commit('loginSuccessPopup', true)}, 300)
        setTimeout(() => {commit('loginSuccessPopup', false)}, 7000)
        dispatch('toggleLoginModal', false);
        if (router.history.current.path === '/signup') {
          router.push('/');
        }
      })
        .catch(err => {
          console.log(err)
          commit('errMessage', err.response.data.message)
          commit('loginLoading', false);
        })
  },
  isLoggedIn({ commit }, payload) {
    commit('loggedIn', payload)
  },
  logout({ commit }) {
    commit('logout')
  },
  signinWithGoogle({ commit }, userData) {
    commit('signinWithGoogle', userData);
    setTimeout(() => {commit('loginSuccessPopup', true)}, 300)
    setTimeout(() => {commit('loginSuccessPopup', false)}, 7000)
  }
}
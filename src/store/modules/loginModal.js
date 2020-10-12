export const state = {
  loginModal: false,
}

export const getters = {
  loginModal: (state) => state.loginModal,
}

export const mutations = {
  toggleLoginModal(state, data) {
    state.loginModal = data;
  }
}
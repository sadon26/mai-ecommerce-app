export const state = {
  showProductOverview: null,
}

export const getters = {
  productOverview: state => state.showProductOverview,
}
export const mutations = {
  showProductOverview(state, payload) {
    state.showProductOverview = payload;
    console.log(payload)
  },
  hideProductOverview(state) {
    state.showProductOverview = null;
  }
}

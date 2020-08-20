import axios from 'axios'

export const state = {
  address: null,
  statesAndLga: null,
  lgas: [],
  addressSpinnerLoading: false,
  showEditAddressBox: true,
  showAddAddress: false,
}
export const getters = {
  address: state => state.address,
  statesAndLga: state => state.statesAndLga,
  lgas: state => state.lgas,
  addressSpinnerLoading: state => state.addressSpinnerLoading,
  showEditAddressBox: state => state.showEditAddressBox,
  showAddAddress: state => state.showAddAddress,
}

export const mutations = {
  getAddress(state, payload) {
    console.log(payload)
    state.address = payload
  },
  statesAndLga(state, payload) {
    state.statesAndLga = payload;
  },
  lgas(state) {
    const lga = state.statesAndLga.filter(state => state.alias === "adamawa")
    state.lgas = lga[0].lgas
    console.log(state.lgas)
  },
  updaTeSelectedLga(state, payload) {
    const lga = state.statesAndLga.filter(state => state.alias === payload)
    state.lgas = lga[0].lgas
    console.log(state.lgas)
  },
  addressSpinnerLoading(state, payload) {
    state.addressSpinnerLoading = payload
  },
  showEditAddressBox(state, payload) {
    state.showEditAddressBox = payload
  },
  showAddAddress(state, payload) {
    state.showAddAddress = payload
  }
}

export const actions = {
  getAddress({ commit }, token) {
    const config = { headers: { token } };
    axios.get('address', config)
    .then(res => {
      console.log(res)
      commit('getAddress', res.data.data)
    })
    .catch(err => console.log(err))
  },
  addAddress({ commit, dispatch }, payload) {
    const { addressDetails, token } = payload
    const config = { headers: { token } };
    console.log(addressDetails, token)
    commit('addressSpinnerLoading', true)
    axios.post('address', addressDetails, config)
    .then(res => {
      console.log(res)
      dispatch('getAddress', token);
      commit('showEditAddressBox', false)
      commit('showAddAddress', false)
      commit('addressSpinnerLoading', false)
    })
    .catch(err => {
      console.log(err)
      commit('addressSpinnerLoading', false)
    })
  }
}

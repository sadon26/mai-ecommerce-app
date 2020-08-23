import axios from 'axios'

export const state = {
  address: null,
  statesAndLga: null,
  lgas: [],
  addressSpinnerLoading: false,
  showEditAddressBox: true,
  showAddAddress: false,
  editAddressDetails: '',
}
export const getters = {
  address: state => state.address,
  statesAndLga: state => state.statesAndLga,
  lgas: state => state.lgas,
  addressSpinnerLoading: state => state.addressSpinnerLoading,
  showEditAddressBox: state => state.showEditAddressBox,
  showAddAddress: state => state.showAddAddress,
  editAddressDetails: state => state.editAddressDetails,
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
  updateSelectedLga(state, payload) {
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
  },
  editAddressDetails(state, payload) {
    console.log(payload)
    state.editAddressDetails = payload
  },
}

export const actions = {
  getAddress({ commit }, token) {
    const config = { headers: { token } };
    commit('addressSpinnerLoading', true)
    axios.get('address', config)
    .then(res => {
      console.log(res)
      commit('addressSpinnerLoading', false)
      commit('getAddress', res.data.data)
    })
    .catch(err => {
      console.log(err)
      commit('addressSpinnerLoading', false)
    })
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
  },
  editAddress({ commit }, payload) {
    const { id, token } = payload
    const config = { headers: { token } };
    commit('addressSpinnerLoading', true)
    axios.get(`/oneAddress/${id}`, config)
    .then(res => {
      commit('addressSpinnerLoading', false)
      commit('editAddressDetails', res.data)
      commit('showAddAddress', true)
    })
    .catch(err => {
      console.log(err.response.data.message)
      commit('addressSpinnerLoading', false)
    })
  },
  removeAddress({ commit, dispatch }, payload) {
    const { id, token } = payload
    const config = { headers: { token } };
    commit('addressSpinnerLoading', true)
    axios.delete(`/address/${id}`, config)
    .then(res => {
      commit('addressSpinnerLoading', false);
      console.log(res)
      dispatch('getAddress', token)
    })
    .catch(err => {
      console.log(err.response.data.message)
      commit('addressSpinnerLoading', false)
    })
  },
  saveAsDefaultAddress({ commit, dispatch }, payload) {
    const { id, token } = payload;
    const config = { headers: { token } };
    commit('addressSpinnerLoading', true)
    axios.patch('/address', {id}, config)
    .then(res => {
      console.log(res)
      dispatch('getAddress', token);
      commit('showEditAddressBox', false)
      commit('addressSpinnerLoading', false)
    })
    .catch(err => {
      console.log(err.response.data.message)
      commit('addressSpinnerLoading', false)
    })
  },
  updateAddress({ commit, dispatch }, payload) {
    const { addressDetails, token } = payload;
    const config = { headers: { token } };
    console.log(addressDetails, token);
    const { id, additional_mobile_number, address, city, first_name, last_name, mobile_number, state_region } = addressDetails;
    commit('addressSpinnerLoading', true);
    axios.put('/address', {
      id, additional_mobile_number, address, city, first_name, last_name, mobile_number, state_region
    }, config)
    .then(res => {
      console.log(res)
      commit('addressSpinnerLoading', false)
      dispatch('getAddress', token);
      commit('showAddAddress', false);
      commit('showEditAddressBox', false)
    })
    .catch(err => {
      console.log(err)
      commit('addressSpinnerLoading', false)
    });

  }
}

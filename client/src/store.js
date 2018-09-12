import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    customer: {},
    provider: {},
    map: {},
  },
  mutations: {
    setCustomer(state, customer){
      state.customer = customer
    },
    setProvider(state, provider){
      state.provider = provider
    },
    setMap(state, map){
      state.map = map
    },
  },
  actions: {
    //customer
    registerCustomer({ commit, dispatch }, newCustomer) {
      auth.post('register', newCustomer)
        .then(res => {
          commit('setCustomer', res.data)
          router.push({ name: 'Customer' })
        })
    },
    authenticateCustomer({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setCustomer', res.data)
          router.push({ name: 'Customer' })
        })
    },
    loginCustomer({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setCustomer', res.data)
          router.push({ name: 'Customer' })
        })
    },
    logoutCustomer({commit, dispatch}) {
      auth.delete('logout')
      .then(res => {
        commit('setCustomer', {})
        router.push({name: 'loginCustomer'})
      })
    },
    //provider
   registerProvider({ commit, dispatch }, newProvider) {
    auth.post('register', newProvider)
      .then(res => {
        commit('setProvider', res.data)
        router.push({ name: 'Provider' })
      })
  },
  authenticateProvider({ commit, dispatch }) {
    auth.get('authenticate')
      .then(res => {
        commit('setProvider', res.data)
        router.push({ name: 'Provider' })
      })
  },
  loginProvider({ commit, dispatch }, creds) {
    auth.post('login', creds)
      .then(res => {
        commit('setProvider', res.data)
        router.push({ name: 'Provider' })
      })
  },
  logoutProvider({commit, dispatch}) {
    auth.delete('logout')
    .then(res => {
      commit('setProvider', {})
      router.push({name: 'loginProvider'})
    })
  },
  }
})

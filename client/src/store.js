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
    user: {},
    map: {},
  },
  mutations: {
    setUser(state, user){
      state.user = user
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
          commit('setUser', res.data)
          if (!res.data.provider)
          router.push({ name: 'customer' })
          else
          router.push({ name: 'provider' })
        })
    },
    authenticateCustomer({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          if (!res.data.provider)
          router.push({ name: 'customer' })
          else
          router.push({ name: 'provider' })
        })
    },
    loginCustomer({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          if (!res.data.provider)
          router.push({ name: 'customer' })
          else
          router.push({name: 'provider' })
        })
    },
    logoutCustomer({commit, dispatch}) {
      auth.delete('logout')
      .then(res => {
        commit('setUser', {})
        router.push({name: 'home'})
      })
    },
  logoutProvider({commit, dispatch}) {
    auth.delete('logout')
    .then(res => {
      commit('setUser', {})
      router.push({name: 'home'})
    })
  
},

  addMapData({commit}, mapData){
    commit('setMap', mapData)
  }
  //add job
  // addJob({commit,dispatch},obj){
  //   console.log(obj)
  //   api.post("job",obj)
  //   .then(res =>{
  //     console.log("job added")

  //   })
  // }
  }
})





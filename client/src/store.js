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

let apiGeo = Axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/json?address=",
  })


// Chace's API key for geocode DO NOT reuse
let apiKey = '?key=AIzaSyBO2Ffcqzt0oT3Agz2_zuH3ZyELdwJAov0' 

function geoFormatter(address){ 
  let output = ''
  let commaCount = 0
  for(let key in address){
    let value = address[key].split(' ').join('+')
    output += commaCount < 2 ? value + ",+" : value
    commaCount++
  }
  return output
}


export default new Vuex.Store({
  state: {
    user: {},
    map: {},
    jobLocation: {lat:0, lng:0}
  },
  mutations: {
    setUser(state, user){
      state.user = user
    },
    setMap(state, map){
      state.map = map
    },
    setJobLocation(state, payload){
      state.jobLocation.lat=payload.latitude,
      state.jobLocation.lng=payload.longitude
    },
    isProvider(state){
      state.user.provider = true
    }
  },
  actions: {
    
    //customer
    register({ commit, dispatch }, newCustomer) {
      auth.post('register', newCustomer)
        .then(res => {
          commit('setUser', res.data)
          if (!res.data.provider)
          router.push({ name: 'customer' })
          else
          router.push({ name: 'provider' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          if (!res.data.provider)
          router.push({ name: 'customer' })
          else
          router.push({ name: 'provider' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          if (!res.data.provider)
          router.push({ name: 'customer' })
          else
          router.push({name: 'provider' })
        })
    },
    logout({commit, dispatch}) {
      auth.delete('logout')
      .then(res => {
        commit('setUser', {})
        router.push({name: 'home'})
      })
    },

    // Map
  addMapData({commit}, mapData){
    commit('setMap', mapData)
  },
  createJobGeo({commit, dispatch}, payload){
    let query = geoFormatter(payload)
    apiGeo.get(query + apiKey)
  },
  setUserisProvider({commit}){
    commit('isProvider')
  }
  }
})





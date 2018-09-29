import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
});

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
});

let apiGeo = Axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/json?address="
});

let apiKey = "&key=AIzaSyBO2Ffcqzt0oT3Agz2_zuH3ZyELdwJAov0";

export default new Vuex.Store({
  state: {
    user: {},
    map: {},
    jobLocation: [],
    availableJobs: [],
    job: {},
    pendingJobs: {},
    activeJobs: [],
    completedJobs: [],
<<<<<<< HEAD
    markers: [],
    activeMarker: {},
=======
    markers: []
>>>>>>> 0f24cedd9b6a4ed281f70d2b0a80ff6ab6218b42
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setMap(state, map) {
      state.map = map;
    },
    setJobLocation(state, payload) {
<<<<<<< HEAD
      state.jobLocation = []
      console.log(payload)
=======
      console.log(payload);
>>>>>>> 0f24cedd9b6a4ed281f70d2b0a80ff6ab6218b42
      let jobLocation = {
        lat: payload.results[0].geometry.location.lat,
        lng: payload.results[0].geometry.location.lng
      };
      state.jobLocation.push(jobLocation);
      console.log(
        payload.results[0].geometry.location.lat,
        payload.results[0].geometry.location.lng
      );
    },
    isProvider(state) {
      state.user.provider = true;
    },
    setJob(state, job) {
      console.log(job);
      state.job = job;
    },
    setJobs(state, jobs) {
      console.log(jobs);
      state.availableJobs = jobs;
    },
    setActiveJob(state, job) {
      state.activeJobs = job;
    },
    setMarkers(state, marker) {
<<<<<<< HEAD
      state.markers = [];
      state.markers.push(marker)
    },
    clearMarkers(state) {
      state.markers = []
    },
    // setActiveMarker(state, marker) {
    //   state.activeMarker = marker
    // },
=======
      state.markers.push(marker);
    }
>>>>>>> 0f24cedd9b6a4ed281f70d2b0a80ff6ab6218b42
  },
  actions: {
    //customer
    register({ commit, dispatch }, newCustomer) {
      auth.post("register", newCustomer).then(res => {
        commit("setUser", res.data);
        if (!res.data.provider)
          router.push({
            name: "customer"
          });
        else
          router.push({
            name: "provider"
          });
      });
    },
    authenticate({ commit, dispatch }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
        if (!res.data.provider)
          router.push({
            name: "customer"
          });
        else
          router.push({
            name: "provider"
          });
      });
    },
    login({ commit, dispatch }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
        if (!res.data.provider)
          router.push({
            name: "customer"
          });
        else
          router.push({
            name: "provider"
          });
      });
    },
    logout({ commit, dispatch }) {
      auth.delete("logout").then(res => {
        commit("setUser", {});
        router.push({
          name: "home"
        });
      });
    },

    // Map
    createJobGeo({ commit, dispatch }, payload) {
      apiGeo
        .get(
          payload.street + payload.city + payload.state + payload.zip + apiKey
        )
        .then(res => {
          commit("setJobLocation", res.data);
        });
    },
    postJobOnMap({ commit, dispatch }, job) {
      commit("setJob", job);
      console.log("postJob in store.js");
    },
    createJob({ commit, dispatch }, job) {
      api.post("job", job).then(res => {
        commit("setJob", res.data);
      });
    },
    getJobs({ commit, dispatch }) {
      api.get("job").then(res => {
        commit("setJobs", res.data);
      });
    },
    setUserisProvider({ commit }) {
      commit("isProvider");
    },
    addMarker({ commit }, marker) {
<<<<<<< HEAD
      commit('setMarkers', marker)
    },
    clearMarkers({ commit }) {
      commit('clearMarkers')
    },
    // setActiveMarker({ commit }, marker) {
    //   commit('setActiveMarker', marker)
    // },


=======
      commit("setMarkers", marker);
    }
>>>>>>> 0f24cedd9b6a4ed281f70d2b0a80ff6ab6218b42
  }
});

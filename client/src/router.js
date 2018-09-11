import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CLogin from './views/Customer-Login.vue'
import PLogin from './views/Provider-Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/CLogin',
      name: 'customerLogin',
      component: CLogin
    },
    {
      path: '/PLogin',
      name: 'providerLogin',
      component: PLogin
    }
  ]
})

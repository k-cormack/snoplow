import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Customer from './views/Customer.vue'
import Provider from './views/Provider.vue'
import userInfo from './views/User-Info.vue'
import providerInfo from './views/Provider-Info.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
    path: '/Customer',
    name: 'customer',
    component: Customer
    },
    {
    path: '/Provider',
    name: 'provider',
    component: Provider
    },
    {
    path: '/PInfo',
    name: 'providerInfo',
    component: providerInfo
    },
    {
    path: '/userInfo',
    name: 'userInfo',
    component: userInfo
    }, 
  ]
})

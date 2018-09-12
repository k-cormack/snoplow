import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CLogin from './views/Customer-Login.vue'
import PLogin from './views/Provider-Login.vue'
import Customer from './views/Customer.vue'
import Provider from './views/Provider.vue'
import customerInfo from './views/Customer-Info.vue'
import providerInfo from './views/Provider-Info.vue'

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
    },
    {
    path: '/Customer',
    name: 'Customer',
    component: Customer
    },
    {
    path: '/Provider',
    name: 'Provider',
    component: Provider
    },
    {
    path: '/PInfo',
    name: 'providerInfo',
    component: providerInfo
    },
    {
    path: '/CInfo',
    name: 'customerInfo',
    component: customerInfo
    }
  ]
})

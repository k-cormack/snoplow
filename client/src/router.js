import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import CLogin from './views/Customer-Login.vue'
// @ts-ignore
import PLogin from './views/Provider-Login.vue'
// @ts-ignore
import Customer from './views/Customer.vue'
// @ts-ignore
import Provider from './views/Provider.vue'
// @ts-ignore
import customerInfo from './views/Customer-Info.vue'
// @ts-ignore
import providerInfo from './views/Provider-Info.vue'
// @ts-ignore


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
    path: '/CInfo',
    name: 'customerInfo',
    component: customerInfo
    },
    
  ]
})

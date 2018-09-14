import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Customer from './views/Customer.vue'
// @ts-ignore
import Provider from './views/Provider.vue'
// @ts-ignore
import userInfo from './views/User-Info.vue'
// @ts-ignore
import providerInfo from './views/Provider-Info.vue'
// @ts-ignore
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
    // {
    //   path: '/CLogin',
    //   name: 'customerLogin',
    //   component: CLogin
    // },
    // {
    //   path: '/PLogin',
    //   name: 'providerLogin',
    //   component: PLogin
    // },
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

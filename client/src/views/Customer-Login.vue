<template>
  <div class="customer-login">
    <form class="" v-if="customerLoginForm" @submit.prevent="loginCustomer">
      <input type="email" v-model="creds.email" placeholder="email">
      <input type="password" v-model="creds.password" placeholder="password">
      <button type="submit">Login</button>
    </form>
    <form class="" v-else @submit.prevent="registerCustomer">
      <input type="name" v-model="newCustomer.name" placeholder="name">
      <input type="tel" v-model="newCustomer.phone" placeholder="phone">
      <input type="email" v-model="newCustomer.email" placeholder="email">
      <input type="password" v-model="newCustomer.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form>
    <div @click="customerLoginForm = !customerLoginForm">
      <p v-if="customerLoginForm">Not a member? Click here to register</p>
      <p v-else>Already a member? Click here to Login</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: "customerLogin",
  data() {
    return{
      customerLoginForm: true,
      creds: {
        email: "",
        password: "",
      },
      newCustomer: {
        name: "",
        phone: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    registerCustomer(){
      this.$store.dispatch()
    },
    loginCustomer(){
      this.$store.dispatch()
    }
  }
};
</script>

<style>

</style>

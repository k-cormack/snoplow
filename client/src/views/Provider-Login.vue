<template>
  <div class="provider-login">
    <form class="" v-if="providerLoginForm" @submit.prevent="loginProvider">
      <input type="email" v-model="creds.email" placeholder="email">
      <input type="password" v-model="creds.password" placeholder="password">
      <button type="submit">Login</button>
    </form>
    <form class="" v-else @submit.prevent="registerProvider">
      <input type="name" v-model="newProvider.name" placeholder="name">
      <input type="tel" v-model="newProvider.phone" placeholder="phone">
      <input type="email" v-model="newProvider.email" placeholder="email">
      <input type="password" v-model="newProvider.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form>
    <div @click="providerLoginForm = !providerLoginForm">
      <p v-if="providerLoginForm">Not a  registered provider? Click here to register</p>
      <p v-else>Already registered? Click here to Login</p>
    </div>
  </div>  
</template>


<script>
export default {
    name: "providerLogin",
  data() {
    return{
      providerLoginForm: true,
      creds: {
        email: "",
        password: "",
      },
      newProvider: {
        name: "",
        phone: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    registerProvider(){
      this.$store.dispatch('registerProvider', this.newProvider)
    },
    loginProvider(){
      this.$store.dispatch('loginProvider', this.creds)
    }
  }
};

</script>

<style>

</style>

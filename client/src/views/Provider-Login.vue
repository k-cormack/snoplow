<template>
  <div class="provider-login container-fluid">
    <form class="" v-if="providerLoginForm" @submit.prevent="loginProvider">
      <input type="email" v-model="creds.email" placeholder=" E-mail Address">
      <input type="password" v-model="creds.password" placeholder=" Password">
      <button type="submit">Login</button>
    </form>
    <form class="" v-else @submit.prevent="registerProvider">
      <input type="name" v-model="newProvider.name" placeholder=" Name">
      <input type="tel" minlength="10" v-model="newProvider.phone" placeholder=" Phone">
      <input type="email" v-model="newProvider.email" placeholder=" E-mail Address">
      <input type="password" minlength="6" v-model="newProvider.password" placeholder=" Password">
      <button type="submit">Create Account</button>
    </form>
    <div @click="providerLoginForm = !providerLoginForm">
      <p v-if="providerLoginForm">No Account Yet? Click <span>HERE</span> to Register Now!</p>
      <p v-else>Already a Member? Click <span>HERE</span> to Login Now!</p>
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

<style scoped>
  p {
    font-size: 35px;
    margin-top: 10px;
  }
  .provider-login {
    margin-top: 20px;
    font-size: 20px;
  }
  span {
    color: blue;
    cursor: pointer;
  
  }
  button {
    background-color: green;
    color: white
  }
  input, button {
    border-radius: 10px
  }

</style>

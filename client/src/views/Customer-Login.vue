<template>
  <div class="customer-login">
    <form class="" v-if="customerLoginForm" @submit.prevent="loginCustomer">
      <input type="email" v-model="creds.email" placeholder="  E-mail Address" required>
      <input type="password" v-model="creds.password" placeholder="  Password" required>
      <button type="submit">LOGIN</button>
    </form>
    <form class="" v-else @submit.prevent="registerCustomer">
      <input type="name" v-model="newCustomer.name" placeholder="name">
      <input type="tel" v-model="newCustomer.phone" placeholder="phone">
      <input type="email" v-model="newCustomer.email" placeholder="email">
      <input type="password" v-model="newCustomer.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form>
    <div @click="customerLoginForm = !customerLoginForm">
      <p v-if="customerLoginForm">No Account Yet? Click <span>HERE</span> to register!</p>
      <p v-else>Already a Member? Click <span>HERE</span> to Login</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: "customerLogin",
  data() {
    return {
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
      this.$store.dispatch('registerCustomer', this.newCustomer);
    },
    loginCustomer(){
      this.$store.dispatch('loginCustomer', this.creds);
    }
  }
};
</script>

<style scoped>
  p {
    font-size: 35px;
    margin-top: 10px;
  }
  .customer-login {
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

<template>
  <div class="provider-login container-fluid">
    <form class="" v-if="providerLoginForm" @submit.prevent="login">
      <div>
        <input type="email" v-model="creds.email" placeholder=" E-mail Address">
        <input type="password" v-model="creds.password" placeholder=" Password">
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    <form class="" v-else @submit.prevent="registerProvider">
      <div>
        <input type="name" v-model="newProvider.name" placeholder=" Name">
        <input type="tel" minlength="10" v-model="newProvider.phone" placeholder=" Phone">
        <input type="email" v-model="newProvider.email" placeholder=" E-mail Address">
        <input type="password" minlength="6" v-model="newProvider.password" placeholder=" Password">
      </div>
      <div>
        <button type="submit">Create Account</button>/
      </div>
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
      return {
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
          provider: true
        }
      }
    },
    methods: {
      registerProvider() {
        this.$store.dispatch('registerCustomer', this.newProvider)
      },
      login() {
        this.$store.dispatch('login', this.creds)
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
    text-shadow: 2px 2px black
  }

  span {
    color: yellow;
    cursor: pointer;

  }

  button {
    background-color: green;
    color: white
  }

  input,
  button {
    border-radius: 10px
  }
</style>
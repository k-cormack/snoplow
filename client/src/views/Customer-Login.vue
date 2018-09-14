<template>
  <div class="customer-login container-fluid">
    <div class="" v-if="customerLoginForm">
      <form @submit.prevent="login">
        <div>
          <input type="email" v-model="creds.email" placeholder="  E-mail Address" required>
          <input type="password" v-model="creds.password" placeholder="  Password" required>
        </div>
        <div>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
    <div class="" v-else>
      <form @submit.prevent="registerCustomer">
        <div>
          <input type="name" v-model="newCustomer.name" placeholder=" Name">
          <input type="tel" minlength="10" v-model="newCustomer.phone" placeholder=" Phone">
          <input type="email" v-model="newCustomer.email" placeholder=" E-mail Address">
          <input minlength="6" type="password" v-model="newCustomer.password" placeholder=" Password">
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
    <div @click="customerLoginForm = !customerLoginForm">
      <p v-if="customerLoginForm">No Account Yet? Click <span>HERE</span> to Register Now!</p>
      <p v-else>Already a Member? Click <span>HERE</span> to Login Now!</p>
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
      registerCustomer() {
        this.$store.dispatch('registerCustomer', this.newCustomer);
      },
      login() {
        this.$store.dispatch('login', this.creds);
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
<template>
  <div class="home">
    <h3>Are you a customer or a trusted service provider</h3>
    <button @click="customerLogin">Customer</button>
    <button @click="providerLogin">Service Provider</button>
  </div>
</template>

<script>
export default {
  name:"",
  methods:{
    customerlogin(){
      this.$router.push({name: "customerLogin"})
    },
    providerLogin(){
      this.$router.push({name: "providerLogin"})
    }
  }
}
</script>

<style>

</style>

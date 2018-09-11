<template>
  <div class="home">
    <h1>Are you a customer or a trusted service provider</h1>
    <button @click="customerLogin" type="button" class="btn btn-primary btn-lg">Customer</button>
    <button @click="providerLogin" type="button" class="btn btn-success btn-lg">Service Provider</button>
  </div>
</template>

<script>
export default {
  name:"Home",
  methods:{
    customerLogin(){
      this.$router.push({name: "customerLogin"})
    },
    providerLogin(){
      this.$router.push({name: "providerLogin"})
    }
  }
}
</script>

<style>
.btn-lg{
  width: 25%;
  height: 13vh;
  font-size: 44px
}

</style>

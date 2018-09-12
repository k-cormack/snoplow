<template>
  <div class="home">
    <div class="col-12 main">
    <div class="row">

      <h1>Looking for Service?</h1>
    </div>
    <div class="row">
      <button @click="customerLogin" type="button" class="btn btn-primary btn-lg">Customer</button>
    </div>
  </div>

    <div class="row">
      <h1>Looking for Plowing Job?</h1>
    </div>
    <div class="row">
      <button @click="providerLogin" type="button" class="btn btn-success btn-lg">Provider</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      customerLogin() {
        this.$router.push({ name: "customerLogin" })
      },
      providerLogin() {
        this.$router.push({ name: "providerLogin" })
      }
    }
  }
</script>

<style scoped>
  .btn-lg {
    width: 250px;
    height: 120px;
    font-size: 44px;
    text-shadow: 2px 2px black;
    padding-bottom: 15px
  }

  .row {
    justify-content: center
  }
  .col-12 {
    margin-top: 25vh
  }
</style>
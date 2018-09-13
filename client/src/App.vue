<template>
  <div class="flex container" id="app">

    <router-view />

  </div>
</template>

<script>



</script>

<style>
  body {
    background: url('./assets/plowDriveway.jpg') no-repeat center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed
  }

  #app {
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    text-shadow: 2px 2px black;
    
  }
</style>
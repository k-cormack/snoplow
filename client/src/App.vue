<template>
  <div class="flex" id="app">
  
    <router-view/>

  </div>
</template>

<script>

</script>

<style>

  body {
    background: url('./assets/plowDriveway.jpg');
    background-size: cover;
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


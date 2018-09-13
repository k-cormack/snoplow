<template>
  <div class="customer">
    <div>
      <Navbar />
    </div>
    <div class="container">
      <div>
        <h1>Pending Jobs</h1>

      </div>
      <div>
        <h1>Active Jobs</h1>

      </div>
      <div>
        <h1>Completed Jobs</h1>

      </div>
    </div>
  </div>
</template>

<script>

  import Navbar from '@/components/Customer-Navbar';

  export default {
    name: "customerInfo",
    components: {
      Navbar,
    },
  }

</script>

<style scoped>
  .container {
    background-color: rgba(0, 68, 255, 0.555);
  }

</style>
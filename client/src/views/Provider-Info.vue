<template>
  <div class="provider">
    <div>
      <Navbar />
    </div>
    <h1>Pending Jobs</h1>
    <div>

    </div>
    <h1>Active Jobs</h1>
    <div>

    </div>
    <h1>Completed Jobs</h1>
    <div>

    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Provider-Navbar';

export default {
    name: "providerInfo",
    components: {
        Navbar,
    },
}    

</script>

<style scoped>

</style>

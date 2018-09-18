<template>
  <div class="customer">
    <div>
      <Navbar />
    </div>
    <div class="container">
      <div>
        <h1>Pending Jobs</h1>
        <div class="row">
          <JobInfo class="col-12" v-for="job in jobs" :key="job._id" :jobData="job"/>
        </div>

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

  import Navbar from '@/components/Navbar';
  import JobInfo from '@/components/JobInfo'

  export default {
    name: "userInfo",
    components: {
      Navbar,
      JobInfo
    },
    computed: {
      jobs(){
        return this.$store.state.job
      }
    }
  }

</script>

<style scoped>
  .container {
    background-color: rgba(0, 68, 255, 0.555);
    border-radius: 10px;
    text-shadow: 2px 2px black;
  }

</style>
<template>
<div class="createJob">
    <form @submit.prevent="addJob">
      <input type="text" placeholder="Street Address, City, State" v-model="newJob.address" required>
      <!-- <input type="text" placeholder="City" v-model="newJob.city">
      <input type="text" placeholder="State" v-model="newJob.state">
      <input type="text" placeholder="Zip" v-model="newJob.zip"> -->
      <button type="submit">Create Job</button>
    </form>
        
 
</div>
</template>
<script>
export default {
  data() {
    return {
      newJob: {
        address: "",
        complete: false
      }
    };
  },
  computed: {},
  methods: {
    addJob() {
      let obj = {
        address: this.newJob.address
      };
      this.$store.dispatch("createJobGeo", obj);
    }
  }
};
</script>
<style>
.col-4 {
  padding-left: 5rem;
}
</style>
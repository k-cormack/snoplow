<template>
<div class="createJob">
    <form @submit.prevent="addJob">
      <input type="text" placeholder="Street Address," v-model="newJob.address" required>
      <input type="text" placeholder="City" v-model="newJob.city">
      <input type="text" placeholder="State" v-model="newJob.state">
      <!-- <input type="text" placeholder="Zip" v-model="newJob.zip"> -->
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
        city:"",
        state:"",
        complete: false
      }
    };
  },
  computed: {
      user(){
          return this.$store.state.user;
      }
  },
  methods: {

    addJob() {
      let obj = {
        address: this.newJob.address,
        city: this.newJob.city,
        state: this.newJob.state,
        // name: this.user.name,
        // email: this.user.email,
        // phone: this.user.phone,


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
<template>
<div class="createJob">
    <form @submit.prevent="lookupJobLoc">
      <input type="text" placeholder="Street Address" v-model="newJob.street" required>
      <input type="text" placeholder="City" v-model="newJob.city" required>
      <input type="text" placeholder="State" v-model="newJob.state" required>
      <input type="text" placeholder="Zip Code" v-model="newJob.zip">
      <button type="submit">Verify Plow Location</button>
    </form> 
</div>
</template>
<script>
export default {
  data() {
    return {
      newJob: {
        street:"",
        city:"",
        state:"",
        zip:"",
        complete: false
      }
    };
  },
  // computed: {
  //     user(){
  //         return this.$store.state.user;
  //     }
  // },
  methods: {

    lookupJobLoc() {
      let obj = {
          // customerName: this.user.name,
          // customerId: this.user._id,
          street: this.newJob.street,
          state: this.newJob.state,
          city: this.newJob.city,
          zip: this.newJob.zip,
          // customerEmail: this.user.email,
          // customerPhone: this.user.phone,
          // provider: this.user.provider

      };
      console.log(obj)
      this.$store.dispatch("createJobGeo", obj);
      // this.$store.dispatch("createJob",obj)
    }
  }
};
</script>
<style scoped>

</style>
<template>
<div class="createJob">
    <form @submit.prevent="addJob">
      <input type="text" placeholder="Street Address," v-model="newJob.street" required>
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
        street: "",
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
          customerName: this.user.name,
          customerId: this.user._id,
        street: this.newJob.street,
        state: this.newJob.state,
        city: this.newJob.city,
        customerEmail: this.user.email,
        customerPhone: this.user.phone,
        provider: this.user.provider

      };
      console.log(obj)
      this.$store.dispatch("createJobGeo", obj);
      this.$store.dispatch("createJob",obj)
    }
  }
};
</script>
<style>
.col-4 {
  padding-left: 5rem;
}
</style>
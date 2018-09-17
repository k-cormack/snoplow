<template>
<div class="createJob">
    <form @submit.prevent="addJob">
      <input type="text" placeholder="Street Adress" v-model="newJob.street" required>
      <input type="text" placeholder="City" v-model="newJob.city">
      <input type="text" placeholder="State" v-model="newJob.state">
      <input type="text" placeholder="Zip" v-model="newJob.zip">
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
          city: "",
          state: "",
          zip: "",
        
        complete: false
      }
    };
  },

  methods: {
    addJob(){
    

    }
  }
};
</script>
<style>
.col-4 {
  padding-left: 5rem;
}
</style>

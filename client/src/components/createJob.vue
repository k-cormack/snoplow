<template>
  <div class="createJob col-md-3">
    <form class="pure-form pure-form-aligned" @submit.prevent="lookupJobLoc">
      <fieldset>
        <div class="pure-control-group">
          <input type="text" placeholder="Street Address" v-model="newJob.street" required>
        </div>
        <div class="pure-control-group">
          <input type="text" placeholder="City" v-model="newJob.city" required>
        </div>
        <div class="pure-control-group">
          <input type="text" placeholder="State" v-model="newJob.state" required>
        </div>
        <div class="pure-control-group">
          <input type="text" placeholder="Zip Code" v-model="newJob.zip">
        </div>        
          <label for="cb" class="pure-checkbox">
            <input id="cb" type="checkbox"> I've read the terms and conditions
          </label>
          <button type="submit" class="pure-button pure-button-primary">Verify Plow Location</button>
        
      </fieldset>
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
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    methods: {

      lookupJobLoc() {
        let obj = {
          customerName: this.user.name,
          customerId: this.user._id,
          street: this.newJob.street,
          state: this.newJob.state,
          city: this.newJob.city,
          zip: this.newJob.zip,
          customerEmail: this.user.email,
          customerPhone: this.user.phone,
          provider: this.user.provider

        };
        console.log(obj)
        this.$store.dispatch("createJobGeo", obj);
        this.$store.dispatch("postJobOnMap", obj)
      }
    }
  };
</script>
<style scoped>

  label, span {
    color: white
  }
  .pure-control-group {
    justify-content: center
  }
  
</style>
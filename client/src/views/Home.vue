   <template>
  <div class="home">
    <header>
      <div class="row">
        <img src="../assets/Logo1.jpg" alt="" id="logo1">
        <img src="../assets/SnoPlow1.jpg" alt="" id="snoplow">
      </div>

    </header>
    <div class="col-12 main" id="top">
      <div class="row">

        <h1>Looking for Plow Service?</h1>
      </div>
      <div class="row">
        <button @click="customerLogin" type="button" class="btn btn-primary btn-lg">Customer</button>
      </div>
    </div>
    <div class="col-12 main">
    <div class="row">
      <h1>Looking for Plowing Jobs?</h1>
    </div>
    <div class="row">
      <button @click="providerLogin" type="button" class="btn btn-success btn-lg">Provider</button>
    </div>
    </div>
    <div class="row" id="about-btn-row">

      <button type="button" class="btn btn-primary" id="about-button" onClick="document.querySelector('footer').scrollIntoView({behavior: 'smooth'});">About</button>

    </div>
    <div class="row">
      <div class="col-lg-12" id="about">Welcome to SnoPlow! Your personal snowplow service! Here at SnoPlow we understand the struggle the long winters can take on someone. 
        We are here to make your life easier! It's simple, all you have to do is sign up as a customer, confirm a date and time and one of our trusted providers will accept
        your offer and come remove the ice and snow from your driveways and walkways! You can also become a provider and start helping people with in minutes! Sign up today!
      </div>

    </div>
    <footer>
      <button type="button" class="btn btn-primary" id="footer-button" onClick="document.querySelector('header').scrollIntoView({behavior: 'smooth'});">Back to Top</button>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      customerLogin() {
        this.$router.push({ name: "login" })
      },
      providerLogin() {
        this.$store.dispatch('setUserisProvider'),        
        this.$router.push({ name: "login" })
      }
    }
  }
</script>

<style scoped>
  header {
    padding: 5px
  }
  #logo1 {
    height: auto;
    width: auto;
    max-width: 100px;
    max-height: 60px
  }
  #snoplow {
    height: auto;
    width: auto;
    max-width: 300px;
    max-height: 100px

  }
  .btn-lg {
    width: 250px;
    height: 120px;
    font-size: 44px;
    text-shadow: 2px 2px black;
    padding-bottom: 15px
  }

  #about-btn-row {
    margin-top: 1vh;
    margin-bottom: 47vh
  }

  #about-button {
    text-shadow: 2px 2px black;
  }

  #about {
    background-color: rgba(0, 68, 255, 0.637);
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    min-height: 400px;
    /* font-size: 5vw; */
    font-size: calc(16px + 2vw);
    text-shadow: 2px 2px black;
    
  }

  .row {
    justify-content: center;
    text-shadow: 2px 2px black
  }

  #top {
    margin-top: 4vh
  }

  .col-lg-12 {
    margin-block-end: 25%
  }
</style>
<template>
        <div class="login container-fluid">
          <div class="" v-if="loginForm">
            <form @submit.prevent="login">
              <div>
                <input type="email" v-model="creds.email" placeholder="  E-mail Address" required>
                <input type="password" v-model="creds.password" placeholder="  Password" required>
              </div>
              <div>
                <button type="submit">LOGIN</button>
              </div>
            </form>
          </div>
          <div class="" v-else>
            <form @submit.prevent="register">
              <div>
                <input type="name" v-model="newUser.name" placeholder=" Name">
                <input type="tel" minlength="10" v-model="newUser.phone" placeholder=" Phone">
                <input type="email" v-model="newUser.email" placeholder=" E-mail Address">
                <input minlength="6" type="password" v-model="newUser.password" placeholder=" Password">
              </div>
              <div>
                <button type="submit">Create Account</button>
              </div>
            </form>
          </div>
          <div @click="loginForm = !loginForm">
            <p v-if="loginForm">No Account Yet? Click <span>HERE</span> to Register Now!</p>
            <p v-else>Already a Member? Click <span>HERE</span> to Login Now!</p>
          </div>
        </div>
      </template>
      
      <script>
        export default {
          name: "login",
          data() {
            return {
              loginForm: true,
              creds: {
                email: "",
                password: "",
              },
              newUser: {
                name: "",
                phone: "",
                email: "",
                password: "",
                provider: ""
              }
            }
          },
          mounted() {
              this.newUser.provider = this.isProvider
          },
          methods: {
            register() {
              this.$store.dispatch('register', this.newUser);
            },
            login() {
              this.$store.dispatch('login', this.creds);
            }
          },
          computed: {
              isProvider() {
                  return this.$store.state.user.provider
              }
          }
          
        };
      </script>
      
      <style scoped>
        p {
          font-size: 35px;
          margin-top: 10px;
        }
      
        .login {
          margin-top: 20px;
          font-size: 20px;
          text-shadow: 2px 2px black
        }
      
        span {
          color: yellow;
          cursor: pointer;
      
        }
      
        button {
          background-color: green;
          color: white
        }
      
        input,
        button {
          border-radius: 10px
        }
      </style>
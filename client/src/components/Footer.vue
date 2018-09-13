<template>
        <div class="col-12">
            <div class="customer-navbar row">
                <button class="customer-account" @click="custInfo">Account</button>
                <button class="post-job" @click="postJob">Post Job</button>
                <button class="logout" @click="logout">Log Out</button>
                <!-- <router-link/> -->
            </div>
        </div>
    </template>
    
    <script>
        import Home from '@/views/Home';
    
        export default {
            name: "customer-navbar",
            data: function () {
                return {
    
                };
            },
    
            computed: {
    
            },
    
            mounted() {
    
            },
    
            methods: {
                logout() {
                this.$store.dispatch('logoutCustomer')
                this.$store.state.user._id = ""
                },
                postJob() {
                    this.$router.push({name: 'customer'}) 
                },
                custInfo(){
                    this.$router.push({name: 'customerInfo'})
                }
            },
    
            props: [],
    
            components: {
                Home,
            },
        }
    </script>
    
    <style scoped>
        .customer-navbar {
            background-color: moccasin;
            padding-top: 15px;
            padding-bottom: 15px
        }
    
        .row {
            justify-content: space-around
        }
    </style>
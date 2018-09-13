<template>
        <div class="col-12">
            <div class="provider-navbar row">
                <button class="provider-account" @click="proInfo">Account</button>
                <button class="find-job" @click="findJob">Find Job</button>
                <button class="logout" @click="logout">Log Out</button>
            </div>
        </div>
    </template>
    
    <script>
        import Home from '@/views/Home';
    
        export default {
            name: "provider-navbar",
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
                this.$store.dispatch('logoutProvider')
                this.$store.state.user._id = ""
                },
                findJob(){
                    this.$router.push({name: 'provider'})
                },
                proInfo(){
                    this.$router.push({name: 'providerInfo'})
                },
            },
    
            props: [],
    
            components: {
                Home,
            },
        }
    </script>
    
    <style scoped>
        .provider-navbar {
            background-color:  rgba(20, 183, 238, 0.829);
            padding-top: 15px;
            padding-bottom: 15px;
            border-radius: 10px                        
        }
    
        .row {
            justify-content: space-around
        }
    </style>
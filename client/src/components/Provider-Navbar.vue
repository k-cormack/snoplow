<template>
        <div class="provider-navbar col-12">
            <div class="row">
                <button class="provider-account">Account</button>
                <button class="find-job">Find Job</button>
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
    
                }
            },
    
            props: [],
    
            components: {
                Home,
            },
        }
    </script>
    
    <style scoped>
        .provider-navbar {
            background-color: moccasin;
            padding-top: 15px;
            padding-bottom: 15px
        }
    
        .row {
            justify-content: space-around
        }
    </style>
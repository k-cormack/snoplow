<template>
    <div class="customer-navbar col-12">
        <div class="row">
            <button class="customer-account">Account</button>
            <button class="post-job">Post Job</button>
            <button class="logout" @click="logout">Log Out</button>
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
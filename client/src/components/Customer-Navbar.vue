<template>
    <div class="customer-navbar row">
        <div class="col-4">
            <button class="post-job">Post Job</button>
        </div>
        <div class="col-4">
            <button class="customer-account">Account</button>
        </div>
        <div class="col-4">
            <button class="logout">Log Out</button>
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

        },

        props: [],

        components: {
            Home,
        },
    }
</script>

<style scoped>

</style>
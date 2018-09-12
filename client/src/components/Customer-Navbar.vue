<template>
    <div class="customer-navbar col-12">
        <div class="row">
            <button class="customer-account">Account</button>
            <button class="post-job">Post Job</button>
            <button class="logout">Log Out</button>
            <!-- <div class="col-4">
            </div>
            <div class="col-4">
                <div class="row justify-content-center">
                </div>
            </div>
            <div class="col-4">
                <div class="row justify-content-end">
                </div>
            </div> -->
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
    .customer-navbar {
        background-color: moccasin;
        padding-top: 15px;
        padding-bottom: 15px
    }
    .row {
        justify-content: space-around
    }
   
</style>
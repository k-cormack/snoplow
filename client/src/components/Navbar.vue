<template>
    <div class="col-12">
        <div class="customer-navbar row" v-if="!isProvider">
            <button class="customer-account pure-button" @click="userInfo">Account</button>
            <button class="post-job pure-button" @click="postJob">Post Job</button>
            <button class="logout pure-button" @click="logout">Log Out</button>
        </div>
        <div v-else class="customer-navbar row">
            <button class="customer-account pure-button" @click="userInfo">Account</button>
            <button class="find-job pure-button" @click="findJob">Find Job</button>
            <button class="logout pure-button" @click="logout">Log Out</button>
        </div>
    </div>
</template>

<script>
    import Home from '@/views/Home';
    import { Slide } from 'vue-burger-menu';

    export default {
        name: "navbar",
        data: function () {
            return {
            };
        },
        computed: {
            isProvider() {
                return this.$store.state.user.provider;
            }
        },
        mounted() {
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                this.$store.state.user._id = ""
            },
            postJob() {
                this.$router.push({ name: 'customer' })
            },
            findJob() {
                this.$router.push({ name: 'provider' })
            },
            userInfo() {
                this.$router.push({ name: 'userInfo' })
            }
        },
        props: [],
        components: {
            Home,
            Slide
        },
    }
</script>

<style scoped>
    .customer-navbar {
        background-color: rgba(20, 183, 238, 0.829);
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 10px;
    }
    .row {
        justify-content: space-around
    }
    .customer-account {
        background: rgb(223, 117, 20);
        color: white;
        border-radius: 4px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    .post-job {
        background: rgb(28, 184, 65);
        color: white;
        border-radius: 4px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    .logout {
        background: rgb(202, 60, 60);
        color: white;
        border-radius: 4px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    .find-job {
        background: rgb(28, 184, 65);
        color: white;
        border-radius: 4px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

</style>
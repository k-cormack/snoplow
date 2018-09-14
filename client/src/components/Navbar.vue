<template>
    <div class="col-12">
        <div class="customer-navbar row" v-if="!isProvider">
            <button class="customer-account" @click="userInfo">Account</button>
            <button class="post-job" @click="postJob">Post Job</button>
            <button class="logout" @click="logout">Log Out</button>
        </div>
        <div v-else class="customer-navbar row">
            <button class="customer-account" @click="userInfo">Account</button>
            <button class="find-job" @click="findJob">Find Job</button>
            <button class="logout" @click="logout">Log Out</button>
        </div>



        <!-- <Slide left width="240">
                <a id="home" href="#">
                    <span>FAQ</span>
                </a>
            </Slide> -->



        <!-- <div id="ddown1" class="m-md-2 btn-group b-dropdown dropdown">
                <button id="ddown1__BV_toggle_" aria-haspopup="true" aria-expanded="false" type="button" class="btn btn-secondary dropdown-toggle">DROPDOWN</button>
                <div role="menu" aria-labelledby="ddown1__BV_toggle_" class="dropdown-menu" style>
                    <a role="menuitem" href="#" target="_self" class="dropdown-item">First Menu Item</a>
                </div>
            </div> -->

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
                debugger
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

    /* .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        display: none;
        float: left;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: .25rem;
    } */
</style>
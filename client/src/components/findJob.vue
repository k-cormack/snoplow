<template>
    <div class="findJob">
        <form @submit.prevent="findJob">
            <input type="text" placeholder="City" v-model="findJob.city">
            <input type="text" placeholder="State" v-model="findJob.state">
            <input type="text" placeholder="Zip" v-model="findJob.zip">
            <button type="submit">Find Jobs</button>
        </form>
        <!-- <h3>{{jobData.date}}</h3>
        <h3>{{jobData.address}}</h3> -->

    </div>
</template>

<script>
    export default {
        name: "findJob",
        data: function () {
            return {
                findJob: {
                    city: "",
                    state: "",
                    zip: ""
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
        },
        props: ["jobData"],

        components: {
        },
    };

</script>

<style scoped>
    
</style>
<template>
    <div class="customer conatiner-fluid">
        <div class="row">
            <Navbar />
        </div>
        <div class="row">

        <div class="google-map col-8" id="mapName">
            <googleMaps />
        </div>
        <div class="col-4">
            <createJob/>
        </div>
        </div>
    </div>
</template>

<script>

    import googleMaps from "@/components/Google-Map.vue"
    import Navbar from '@/components/Navbar.vue';
    import Job from '@/components/Job.vue'
    import createJob from '@/components/createJob.vue'
    export default {
        name: "customer",
        components: {
            googleMaps,
            Navbar,
            Job,
            createJob
        },
    }      
</script>

<style scoped>
    .google-map {
        justify-content: center;
    }
</style>
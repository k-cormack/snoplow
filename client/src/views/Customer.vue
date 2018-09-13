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

        </div>
        </div>
    </div>
</template>

<script>

    import googleMaps from "@/components/Google-Map.vue"
    import Navbar from '@/components/Customer-Navbar';
    import Job from '@/components/Job.vue'
    export default {
        name: "customer",
        components: {
            googleMaps,
            Navbar,
            Job
        },
    }      
</script>

<style scoped>
    .google-map {
        justify-content: center;
    }
</style>
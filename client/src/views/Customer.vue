<template>
    <div class="customer container-fluid">
        <div class="row">
            <Navbar />
        </div>
        <div class="row">

            <div class="google-map col-8" id="mapName">
                <googleMaps />
            </div>
            <div class="col-4">
                <createJob />
            </div>
        </div>
    </div>
</template>

<script>

    import googleMaps from "@/components/Google-Map.vue"
    import Navbar from '@/components/Navbar.vue';
    import findJob from '@/components/findJob.vue'
    import createJob from '@/components/createJob.vue'
    export default {
        name: "customer",
        components: {
            googleMaps,
            Navbar,
            findJob,
            createJob
        },
    }      
</script>

<style scoped>
    .row {
        justify-content: center;
    }
    .col-4 {
        padding-left: 15px
    }
</style>
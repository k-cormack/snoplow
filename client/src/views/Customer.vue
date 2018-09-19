<template>
    <div class="customer container-fluid">
        <div class="row">
            <Navbar />
        </div>
        <div class="row main">
            <div class="row map">
                <div class="google-map col-12" id="mapName">
                    <googleMaps />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <createJob />
                </div>
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
        padding-left: 15px;
    }
    .main, map {
        padding-top: 5px;
        margin: 0px;
        justify-content: flex-start;
    }
    .google-map {
        width: 100%;
        height: 100%;
    }
   
</style>
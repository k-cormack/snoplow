<template>
    <div class="customer conatiner-fluid">
        <div class="row">
            <Navbar />
        </div>
        <div class="row">
<<<<<<< HEAD

        <div class="google-map col-8" id="mapName">
            <googleMaps />
=======
            <div class="google-map col-xs-8" id="mapName">
                <googleMaps />
            </div>
            <div class="side-jobs col-xs-4" v-for="job in jobs" :key="job._id">
                <Job :jobData='job' />
            </div>
>>>>>>> 733e59e68f470656e551ccf3ed7036dfc102456d
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
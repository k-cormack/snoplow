<template>
    <div class="provider container-fluid">
        <div class="row">
            <Navbar />
        </div>
        <div class="row">
            <div class="google-map col-8" id="mapName">
                <googleMaps />
            </div>
            <div class="side-jobs col-4" >
                <findJob />
            </div>
        </div>
    </div>
</template>

<script>

    import googleMaps from "@/components/Google-Map.vue"
    import Navbar from '@/components/Navbar.vue'
    import findJob from '@/components/findJob.vue'

    export default {
        name: 'provider',
        components: {
            googleMaps,
            Navbar,
            findJob
        },

    mounted: function(){
        this.$store.dispatch('getJobs')
    }
    }
</script>

<style scoped>
    .col-4 {
        padding-left: 15px
    }
</style>
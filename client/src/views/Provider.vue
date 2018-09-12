<template>
    <div class="provider">
        <div>
            <Navbar />
        </div>
        <div class="google-map" id="mapName">
            <googleMaps />
        </div>
    </div>

</template>

<script>

    import googleMaps from "@/components/Google-Map.vue"
    import Navbar from '@/components/Provider-Navbar'
    
    export default {
        name: 'Provider',
        components: {
            googleMaps,
            Navbar
        }
    }
</script>

<style>

</style>
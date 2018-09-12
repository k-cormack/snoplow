<template>
    <div class="customer">
        <div class="row">
            <Navbar />
        </div>
        <div class="google-map" id="mapName">
            <googleMaps />
        </div>
    </div>
</template>

<script>

    import googleMaps from "@/components/Google-Map.vue" 
    import Navbar from '@/components/Customer-Navbar';

export default {
    name: "customer",
    components: {
        googleMaps,
        Navbar,
    },
}      
</script>

<style scoped>

</style>
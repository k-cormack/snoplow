<template>
    <div class="google-map" id="mapName">
        <googleMaps />    
    </div>
    
</template>

<script>

import googleMaps from "@/components/Google-Map.vue" 

export default {
    name: 'Provider',
    components: {
        googleMaps
    }
    }
</script>

<style>

</style>

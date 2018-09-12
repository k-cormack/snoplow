<template>
    <div class="google-map" :id="mapName">
        <google-map name="proMap"></google-map>    
    </div>
    
</template>

<script>

import googleMaps from "@/components/Google-Map.vue" 

export default {
    
    }
</script>

<style>
.google-map {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    background: gray;
}
</style>

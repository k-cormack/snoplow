<template>
    <div id="googleMap">
        
    </div>
</template>

<script>
export default {
  name: "googleMap",
  props: ["mapData"],
  data: function() {
    return {
      mapName: this.name + "-map",
        markerCoordinates: [{
            latitude: 43.615,
            longitude: -116.2023,
        }]
    };
  },
  mounted: function() {
    const element = document.getElementById("googleMap");
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(43.615, -116.2023)
    };
    const map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) =>{
        const postition = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({
            postition,
            map
        })
    })
  }
};
</script>

<style scoped>
#googleMap{
    display: flex;
    width: 70vw;
    height: 90vh;
    background: gray;
}
</style>

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
      mapName: this.name + "-map"
    };
  },
  mounted: function() {
    const element = document.getElementById("googleMap");
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(43.615, -116.2023)
    };
    const map = new google.maps.Map(element, options);
  }
};
</script>

<style scoped>
#googleMap{
    width: 90vw;
    height: 80vh;
    margin: 0 auto;
    background: gray;
}
</style>

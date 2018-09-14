<template>
    <div>
    <div id="googleMap">
    </div>
        {{myMapData}}

    </div>
</template>

<script>
export default {
  name: "googleMap",
  props: ["mapData"],
  data: function() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 43.615,
          longitude: -116.2023
        },
        {
          latitude: 43.62,
          longitude: -116.2023
        }
      ]
    };
  },
  computed: {
    myMapData() {
      this.$store.state.map;
    }
  },
  mounted: function() {
    const element = document.getElementById("googleMap");
    var options = {
      zoom: 14,
      center: new google.maps.LatLng(43.615, -116.2023),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord, index) => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(coord.latitude, coord.longitude),
        title: "Stupid loop "+ index,
        visible: true
      });
      marker.setMap(map);
    });
  }
};
</script>

<style scoped>
#googleMap {
  display: flex;
  width: 70vw;
  height: 90vh;
  background: gray;
}
</style>

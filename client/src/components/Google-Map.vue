<template>
  <div>
    <div id="googleMap">
    </div>

  </div>
</template>

<script>
  export default {
    name: "googleMap",
    props: ["mapData"],
    data: function () {
      return {
        mapName: this.name + "-map",
        map: {}
      };
    },

    computed: {
      markerCoordinates() {
        return this.$store.state.jobLocations;
      }
    },
    mounted: function () {
      const element = document.getElementById("googleMap");
      var options = {
        zoom: 15,
        center: new google.maps.LatLng(43.615, -116.2023),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(element, options);


      this.drawMarkers()
    },
    watch: {
      markerCoordinates: function (newVal) {
        this.drawMarkers()

      }
    },
    methods: {
      closeAll() {
        this.markers.forEach(m => {
          m.infowindow.close();
        })
      },
      drawMarkers() {
        this.markerCoordinates.forEach((coord, index) => {
          let condition = this.$store.state.user.provider
          if (!condition) {

            var content =
              '<div class="iw-container">' +
              '<div>Job info here</div>' +
              '<button id="postButton" class="ui-btn ui-mini" type="submit">POST JOB</button>' +
              '</div>';
          } else {
            var content =
              '<div class="iw-container">' +
              '<div>Job info here</div>' +
              '<button id="bidButton" class="ui-btn ui-mini" type="submit">BID on JOB</button>' +
              '</div>';
          }

          var locationInfowindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 300,
          });
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coord.latitude, coord.longitude),
            title: "Stupid loop " + index,
            visible: true,
            infowindow: locationInfowindow
          });

          marker.setMap(this.map);

          marker.addListener('click', (event) => {
            let self = this
            this.closeAll()
            marker.infowindow.open(this.map, marker);
            if (!condition) {
              var postButton = document.getElementById('postButton');
              google.maps.event.addDomListener(postButton, 'click', function () {
                console.log("New Job Posted")
                self.$store.dispatch('postJob', marker.position)
              });
            } else {
              var bidButton = document.getElementById('bidButton');
              google.maps.event.addDomListener(bidButton, 'click', function () {
                console.log("Job Bid Submitted")
                self.$store.dispatch('bidJob', marker.position)
              });
            }
          });

          google.maps.event.addListener(this.map, 'click', function () {
            marker.infowindow.close();
          });

        });
      }
    }
  };
</script>

<style>
  #googleMap {
    display: flex;
    width: 60vw;
    height: 90vh;
    background: gray;
  }

  .iw-container {
    color: black
  }
</style>
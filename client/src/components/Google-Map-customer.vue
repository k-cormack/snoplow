<template>

  <div>
    <div id="job-map" style="height: 80vh; width: 100%; position: relative;">
      <div id="googleMap">
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "googleMapCustomer",
    props: ["mapData"],
    data: function () {
      return {
        mapName: this.name + "-map",
        map: {}
      };
    },

    computed: {
      user() {
        return this.$store.state.user;
      },
      markerCoordinates() {
        return this.$store.state.jobLocation;
      },
      job() {
        return this.$store.state.job
      }
    },
    mounted: function () {
        const element = document.getElementById("googleMap");
      var options = {
        zoom: 15,
        center: new google.maps.LatLng(43.615, -116.2023),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      this.map = new google.maps.Map(element, options);

      // this.drawMap();


      this.drawMarkers()
    },
    watch: {
      markerCoordinates: function (newVal) {
        // this.clearMap();
        this.drawMarkers()

      }
    },
    methods: {
      clearMarkers(){
        let markersArray = this.$store.state.markers;
        for (let i = 0; i < markersArray.length; i++) {
          markersArray[i].setMap(null);          
        }
        markersArray.length = 0;
      },
      // drawMap() {
      //   const element = document.getElementById("googleMap");
      // var options = {
      //   zoom: 15,
      //   center: new google.maps.LatLng(43.615, -116.2023),
      //   mapTypeId: google.maps.MapTypeId.ROADMAP,
      // };

      // this.map = new google.maps.Map(element, options);
      // },

      closeAll() {
        this.$store.state.markers.forEach(m => {
          m.infowindow.close();
        })
      },
      drawMarkers() {
        this.markerCoordinates.forEach((coord, index) => {
          if (!this.$store.state.user.provider) {
            var content =
              '<div class="iw-container">' +
              '<div>' +
              this.$store.state.user.name +
              '</div>' +
              '<div>' +
              this.$store.state.user._id +
              '</div>' +
              '<button id="postButton" class="ui-btn ui-mini" type="submit">POST JOB</button>' +
              '</div>';
          } else {
            var content =
              '<div class="iw-container">' +
              '<div>Job info here</div>' +
              '<button id="bidButton" class="ui-btn ui-mini" type="submit">BID on JOB</button>' +
              '</div>';
          };


          var locationInfowindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 300,
          });
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coord.lat, coord.lng),
            title: "Stupid loop " + index,
            visible: true,
            infowindow: locationInfowindow,
            // use this inside:
            // map: this.map
          });
          //or this outside:
          this.clearMarkers();
          this.$store.dispatch('addMarker', marker);

          marker.addListener('click', (event) => {

            let self = this
            this.closeAll()
            marker.infowindow.open(this.map, marker);
            if (!this.$store.state.user.provider) {
              var postButton = document.getElementById('postButton');
              google.maps.event.addDomListener(postButton, 'click', function () {
                let jobInfo = {
                  customerEmail: self.user.email,
                  customerName: self.user.name,
                  customerId: self.user._id,
                  street: self.job.street,
                  state: self.job.state,
                  city: self.job.city,
                  lat: self.markerCoordinates[0].lat,
                  lng: self.markerCoordinates[0].lng,

                  customerPhone: self.job.customerPhone


                };
                console.log("New Job Posted")
                self.$store.dispatch('createJob', jobInfo)
              });
            } else {
              var bidButton = document.getElementById('bidButton');
              google.maps.event.addDomListener(bidButton, 'click', function () {
                console.log("Job Bid Submitted")
                self.$store.dispatch('bidJob', marker)
              });
            }
          });

          google.maps.event.addListener(this.map, 'click', function () {
            marker.infowindow.close();
          });

          // let x = this.$store.state.markers
          // for (let i = 0; i < x.length; i++) {
          //   x[i].setMap(this.map)
            
          // };
          marker.setMap(this.map);
        });
      },
    }
  };
</script>

<style>
  #googleMap {
    display: flex;
    /* width: 60vw; */
    height: 80vh;
    background: gray;
  }

  .iw-container {
    color: black
  }
</style>
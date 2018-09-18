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
    data: function () {
      return {
        mapName: this.name + "-map",
        markers: [],
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
    mounted: function () {
      const element = document.getElementById("googleMap");
      var options = {
        zoom: 15,
        center: new google.maps.LatLng(43.615, -116.2023),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(element, options);


      this.markerCoordinates.forEach((coord, index) => {
        
        var content =
        '</div>' +
        '<button id="postButton" v-on:click="postJob" class="ui-btn ui-mini" type="submit">POST</button>' +
        '</div>';
        
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
        
        marker.setMap(map);
        
        marker.addListener('click', (event) => {
          let self = this
          this.closeAll()
          marker.infowindow.open(map, marker);
          var postButton = document.getElementById('postButton');
          google.maps.event.addDomListener(postButton, 'click', function(){
            console.log("test event")
            self.$store.dispatch('postJob', marker.position)
          })
         
            
          
          
        });
        
        google.maps.event.addListener(map, 'click', function () {
          marker.infowindow.close();
        });

        this.markers.push(marker)
      });
    },
    methods: {
      postjob: function(event) {
        console.log("test event")
      },
      // postJob() {
      //   debugger
      //   this.$store.dispatch('postJob', marker.position)
      // },
      closeAll() {
        this.markers.forEach(m => {
          m.infowindow.close();
        })
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

  #iw-container {
    color: black
  }
</style>
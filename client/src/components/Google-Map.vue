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
        map:{}
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
    watch:{
      markerCoordinates: function(newVal){
        this.drawMarkers()

      }
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
      },
      drawMarkers(){
        this.markerCoordinates.forEach((coord, index) => {
        debugger
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
        
        marker.setMap(this.map);
        
        marker.addListener('click', (event) => {
          let self = this
          this.closeAll()
          marker.infowindow.open(this.map, marker);
          var postButton = document.getElementById('postButton');
          google.maps.event.addDomListener(postButton, 'click', function(){
            console.log("test event")
            self.$store.dispatch('postJob', marker.position)
          })
         
            
          
          
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

  #iw-container {
    color: black
  }
</style>
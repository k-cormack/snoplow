<script>
export default {
    name: 'googleMap',
    props: ['name'],
    data: function(){
        return {
            mapName: this.name + "-map",
        }
    },
    mounted: function(){
        const element = document.getElementById(this.mapName)
        const options = {
            zoom: 14,
            center: new google.maps.LatLng (43.6150, 116.2023)
        }
        const map = new google.maps.Map(element, options);
    }
};
</script>

<style scoped>

</style>

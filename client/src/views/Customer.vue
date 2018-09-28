<template>
    <div class="customer">
        <div class="row">
            <Navbar />
        </div>

        <div class="row map">
            <div class="col-md-8">
                <googleMaps />
            </div>
            <createJob />
            <!-- <div class="job-form col-md-4">
            </div> -->
        </div>



        <!--Original code below-->

        <!-- <div class="row main">
            <div class="row map">
                <div class="google-map col-12" id="mapName">
                    <googleMaps />
                </div>
            </div>
            <div class="row form-row">
                <div class="job-form col-12">
                    <createJob />
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>

    import googleMaps from "@/components/Google-Map-customer.vue"
    import Navbar from '@/components/Navbar.vue';
    import createJob from '@/components/createJob.vue'
    export default {
        name: "customer",
        components: {
            googleMaps,
            Navbar,
            createJob
        },
    }      
</script>

<style scoped>
    .job-form {
        margin-left: 15px;
        justify-content: center;
    }

    .map {
        padding-top: 5px;
        /* margin: 0px; */
        justify-content: center;

    }

    /* .google-map {
        margin-left: 80px;
       
    } */
</style>
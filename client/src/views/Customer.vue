<template>
    <div class="customer">
        <div class="row">
            <Navbar />
        </div>

    </div>
</template>

<script>
    import Navbar from '@/components/Customer-Navbar';

    export default {
        name: "customer",
        data: function () {
            return {

            };
        },




        components: {
            Navbar,
        },
    }      
</script>

<style scoped>

</style>
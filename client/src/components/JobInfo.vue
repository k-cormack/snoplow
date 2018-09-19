<template>
        <div class="jobInfo">
           
            <h3>{{jobData.date}}</h3>
            <h3>{{jobData.address}}</h3>
    
        </div>
    </template>
    
    <script>
        export default {
            name: "jobInfo",
            data: function () {
                return {
                    
                }
            },
            computed: {
    
            },
            mounted() {
    
            },
            methods: {
    
            },
            props: ["jobData"],
    
            components: {
    
            },
        };
    
    </script>
    
    <style scoped>
        
        
    </style>
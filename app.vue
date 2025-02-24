<template>
    <div>
        <NuxtRouteAnnouncer />
    </div>
</template>

<script>
    import FakerService from "@/services/FakerService.js";
    export default {
        methods: {
            getProducts() {
                FakerService.getAllProducts()
                    .then((response) => {
                        console.log(response);
                    });
            },
            getProductByID(productID) {
                FakerService.getProductByID(productID)
                    .then((response) => {
                        console.log(response);
                    });
            },
        },
        mounted() {
            this.getProducts();
            this.getProductByID(5);
        }
    }
</script>
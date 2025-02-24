<template>
    <div>
        <Navbar />
        <NuxtRouteAnnouncer />
        <ProductsListComponent />
    </div>
</template>

<script>
    import ProductsListComponent from "@/components/products/ProductsListComponent.vue";
    import Navbar from "@/components/global/NavbarComponent.vue";

    export default {
        components: {
            ProductsListComponent,
            Navbar
        },
    }
</script>
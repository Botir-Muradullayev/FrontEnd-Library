<template>
    <div>
        <Books/>
        <Pagination/>
    </div>
</template>

<script>
import Books from "@/components/Books";
import Pagination from "@/components/Pagination";
export default {
    name: "Home",
    components: {Pagination, Books}
}
</script>

<style scoped>

</style>

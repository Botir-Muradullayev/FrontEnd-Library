<template>
    <div id="app">
        <div class="container-fluid">

            <Header/>
            <!-- asosiy qator boshlandi -->
            <div class="row mt-4">
                <Categories/>

                <!-- kontent boshlandi -->
                <div class="col-12 col-md-10">
                    <router-view/>
                </div>
                <!-- kontent tugadi -->

            </div>
            <!-- asosiy qator tugadi -->

            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

export default {
    name: 'App',
    components: {Footer, Categories, Header}
}
</script>

<style>

</style>

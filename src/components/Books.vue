<template>
    <div class="row mt-4 mt-md-0">
        <h1>{{ booksTitle }}</h1>

        <!-- kitob boshlandi -->
        <div
            v-for="book of getBooks"
            v-bind:key="book.id"
            class="col-6 col-sm-6 col-md-4 col-xl-3 mb-4">
            <div class="card">
                <img src="/img/otkan-kunlar.jpg" class="card-img-top" alt="no photo">
                <div class="card-body">
                    <h5 class="card-title">{{ book.name }}</h5>
                    <p class="card-text">{{ book.description }}</p>
                    <router-link :to="'/book-info/' + book.id" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>
        <!-- kitob tugadi -->
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Books",
    computed: {
        ...mapGetters(['getBooks']),
        booksTitle() {
            return 'Kitoblar olami'
        }
    },
    methods: {
        ...mapActions(['fetchBooks'])
    },
    mounted() {
        this.fetchBooks(this.$route.params.id)
    },
    watch: {
        '$route.params.id'() {
            this.fetchBooks(this.$route.params.id)
        }
    }
}
</script>


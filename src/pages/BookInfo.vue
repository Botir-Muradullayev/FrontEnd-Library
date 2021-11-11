<template>
    <div>
        <h1>{{ getBook.name }}</h1>
        <p>
            {{ getBook.text}}
        </p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BookInfo",
    computed: {
        ...mapGetters(['getBook'])
    },
    methods: {
        ...mapActions(['fetchBook'])
    },
    mounted() {
        this.fetchBook(this.$route.params.bookId)
    }
}
</script>
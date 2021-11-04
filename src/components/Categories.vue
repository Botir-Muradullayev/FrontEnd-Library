<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <router-link
                v-for="category of getCategories"
                v-bind:key="category.id"
                class="list-group-item"
                :to="'/category/' + category.id"
            >
                {{category.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "Categories",
    computed: {
        ...mapGetters(['getCategories'])
    },
    methods: {
        ...mapActions(['fetchCategories'])
    },
    mounted() {
        this.fetchCategories()
    }
}
</script>

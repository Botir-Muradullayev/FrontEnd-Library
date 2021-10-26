<template>
    <div class="col-12 col-md-2">
        <ul class="list-group">
            <li
                v-for="category of getCategories"
                v-bind:key="category.id"
                class="list-group-item"
            >
                {{category.name}}
            </li>
        </ul>
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

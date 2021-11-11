<template>
    <form class="col-6" @submit.prevent="addBook">
        <div class="mb-3">
            <h1>{{ 'Yangi Kitob Qo\'shish' }}</h1>
            <label for="InputName" class="form-label">Kitob nomi</label>
            <input type="text" class="form-control" id="InputName" v-model="form.name">
        </div>
        <div class="mb-3">
            <label for="InputDescription" class="form-label">Kitob ta`rifi</label>
            <input type="text" class="form-control" id="InputDescription" v-model="form.description">
        </div>
        <div class="mb-3">
            <label class="form-label">Kitob matni</label>
            <textarea type="text" class="form-control" id="textarea" rows="8" v-model="form.text"></textarea>
        </div>
        <select class="form-select mb-3" aria-label="Default select example" v-model="form.category">
            <option
                v-for="category of getCategories"
                v-bind:key="category.id"
                :value="'/api/categories/' + category.id">{{ category.name }}
            </option>
        </select>
        <button type="submit" class="btn btn-primary"> Kitobni Kiritish</button>
    </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddBook",
    computed: {
        ...mapGetters(['getCategories'])
    },
    methods: {
        ...mapActions(['fetchNewBook']),
        addBook() {
            console.log('addBook funksiyasi ishladi')
            this
                .fetchNewBook(this.form)
                .then(() => {
                    console.log('Yangi kitob qo\'shildi')
                    alert('Siz muvaffaqiyatli "yangi kitob"ni qo\'shdingiz')
                    this.$router.push('/')
                })
                .catch(() => {
                    console.log('Yangi kitob qo\'shilishda xatolik mavjud')
                })
        }
    },
    data() {
        return {
            form: {
                name: '',
                description: '',
                text: '',
                category: ''
            }
        }
    }
}
</script>
<template>
    <form class="col-6" @submit.prevent="addCategory">
        <div class="mb-3">
            <h1>{{ 'Kategoriya Qo\'shish' }}</h1>
            <label for="InputName" class="form-label">Kategoriya nomi</label>
            <input type="text" class="form-control" id="InputName" v-model="form.name">
        </div>
        <button type="submit" class="btn btn-primary">Kategoriyani kiritish</button>
    </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "AddCategory",
    methods: {
        ...mapActions(['fetchCategory']),
        addCategory() {
            console.log('addCategory funksiyasi ishladi')
            this
                .fetchCategory(this.form)
                .then(() => {
                    console.log('Kategoriya qo\'shildi')
                    alert('Siz muvaffaqiyatli "Kategoriya turi"ni qo\'shdingiz')
                    this.$router.push('/')
                })
                .catch(() => {
                    console.log('kategoriya qo\'shilishda xatolik mavjud')
                })
        }
    },
    data() {
        return {
            form: {
                name: ''
            }
        }
    }
}
</script>
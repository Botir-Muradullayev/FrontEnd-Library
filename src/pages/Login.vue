<template>
    <form class="col-6" @submit.prevent="auth">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Parol</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
        </div>
        <button type="submit" class="btn btn-primary">Kirish</button>
    </form>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    name: "Login",
    methods: {
        ...mapActions(['fetchToken', "fetchCategories"]),
        auth() {
            console.log('auth funksiyasi ishladi')
            this
                .fetchToken(this.form)
                .then(() => {
                    console.log('Siz avtoriztasiya qilindingiz')
                    alert('Kutubxonamizga xush kelibsiz')
                    this.$router.push('/')
                    this.fetchCategories()
                })
                .catch(()=>{
                    console.log('Login yoki parolingiz xato')
                    alert('Parol yoki login xato, iltimos qayatdan to`g`ri "Login", "Parol" kiriting')
                })

        }
    },
    data(){
        return{
            form: {
                email: "",
                password:""
            }
        }
    }
}
</script>

<style scoped>

</style>
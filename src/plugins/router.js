import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/book-info',
        component:  () => import('../pages/BookInfo')
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
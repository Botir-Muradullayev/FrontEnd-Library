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
        path: '/category/:id',
        component: Home

    },
    {
        path: '/book-info/:bookId',
        component: () => import('../pages/BookInfo')
    },
    {
        path: '/login',
        component: () => import('../pages/Login')
    },
    {
        path: '/AddCategory',
        component: ()=>import('../pages/AddCategory')
    },
    {
        path: '/AddBook',
        component: ()=> import('../pages/AddBook')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
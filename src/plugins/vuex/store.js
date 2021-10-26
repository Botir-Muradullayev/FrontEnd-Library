import Vue from "vue";
import Vuex from 'vuex'
import user from "./user";
import book from "./book";
import category from "./category";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user, book, category
    }
})
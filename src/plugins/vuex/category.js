import axios from "./axios"

export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/categories')
                    .then((response) => {
                        console.log('Kategoriyalar olindi')
                        console.log(response)

                        let categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']

                        }
                        context.commit('updateCategories', categories)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriyalarni olishda qandaydir xatolik bor')
                        reject()
                    })
            })
        },
        fetchCategory(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/categories', data)
                    .then((response) => {
                        console.log('Kategoriya qo\'shildi')
                        console.log(response)

                        context.commit('updateCategory', response.data.category)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriya qo\'shishda qandaydir xatolik bor')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories
        },
        updateCategory(state, category) {
            state.category = category
        }
    },
    state: {
        categories: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getCategories(state) {
            return state.categories.models
        },
        getCategory(state) {
            return state.category.models
        }
    }
}
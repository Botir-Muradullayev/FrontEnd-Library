import axios from "./axios"

export default {
    actions: {
        fetchBooks(context, categoryId = null) {
            return new Promise((resolve, reject) => {
                let categoryUrl = ''

                if (categoryId) {
                    categoryUrl = '?category=' + categoryId
                }
                axios
                    .get('http://localhost:8505/api/books' + categoryUrl)
                    .then((response) => {
                        console.log('kitoblar olindi')
                        console.log(response)

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']

                        }
                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitoblarni olishda xatolik yuz berdi')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateBooks(state, books) {
            state.books = books
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0
        },
    },
    getters: {
        getBooks(state) {
            return state.books.models
        }
    }
}
import axios from "./axios"

export default {
    actions: {
        fetchBooks(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/books')
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
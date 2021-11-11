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
        },

        fetchBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/books/' + bookId)
                    .then((response) => {
                        console.log('kitob olindi')
                        console.log(response)

                        let book = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            category: response.data.category

                        }
                        context.commit('updateBook', book)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitobni olishda xatolik yuz berdi')
                        reject()
                    })
            })
        },
        fetchNewBook(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/books', data)
                    .then((response) => {
                        console.log('Yangi kitob qo\'shildi')
                        console.log(response)

                        context.commit('updateNewBook', response.data.newBook)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitob qo\'shishda qandaydir xatolik bor')
                        reject()
                    })
            })
        }

    },
    mutations: {
        updateBooks(state, books) {
            state.books = books
        },
        updateBook(state, book) {
            state.book = book
        },
        updateNewBook(state, newBook) {
            state.newBook = newBook
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0
        },
        book: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null,
        },
    },
    getters: {
        getBooks(state) {
            return state.books.models
        },
        getBook(state) {
            return state.book
        },
        getNewBook(state) {
            return state.newBook
        },
    }
}
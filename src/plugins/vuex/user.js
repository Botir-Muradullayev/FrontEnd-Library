import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/users/auth', data)
                    .then((response) =>{
                        console.log('token olindi')
                        console. log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() =>{
                        console.log('Token olishda qandaydir xatolik bor')
                    reject()
                    })
                    .finally(() =>{
                        console.log('Bu funksiya har doim ishlaydi, then()dan yoki catch()dan keyin')
                    })

            })
        }
    },
    mutations:{
        updateToken(state, token) {
            state.token = token
        }
    },
    state: {
        token: "",
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
}
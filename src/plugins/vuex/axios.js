import axios from "axios"
import store from "./store";

axios.defaults.headers.common['Content-Type'] = 'application/Id+json'

axios.interceptors.request.use((config) => {
    if (config.url !== 'http://localhost:8505/api/users/auth') {
        config.headers.common['Authorization'] = 'bearer ' + store.getters.getToken
    }
    return config

})

export default axios
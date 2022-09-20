import axios from 'axios'
import store from '@/store'

axios.defaults.withCredentials = true

const api = axios.create({
    baseURL: process.env.VUE_APP_FULL_URL || 'http://localhost:3000',
    headers: {}
})
 
function addHeaders (config) {
    config.headers['HTTP-CONTENT-LANGUAGE'] = 'pt_br'
    return config
}

function handleRequestSuccess (req) {
    // TODO
    return req
}
function handleRequestError (err) {
    // TODO
    if (err.response && err.response.status === 401) {
    // new AuthService().logout()
    // window.reload()
    } else throw err
}
function handleResponseSuccess (req) {
    if (req.data.type && req.data.message) {
        store.dispatch('message/setMessage', req.data)
    }
    return req
}
function handleResponseError (err) {
    store.dispatch('message/setMessage', err.response.data ? err.response.data : err)
    if (err.response && err.response.status === 401) {
        // new AuthService().logout()
        // window.reload()
    } else throw err
}

// Add a request interceptor
api.interceptors.request.use(handleRequestSuccess, handleRequestError, addHeaders)
// Add a response interceptor
api.interceptors.response.use(handleResponseSuccess, handleResponseError)

export const clientAPI = api
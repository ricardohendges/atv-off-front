import { clientAPI } from '../configs/config'

export default class Login {
    static async doLogin (data) {
        return new Promise((res, rej) => {
            clientAPI.post('/login', {}, {
                auth: {
                    username: data.user,
                    password: data.pass,
                }})
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }

    static async getProfile () {
        return new Promise((res, rej) => {
            clientAPI.get('/user')
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }

    static async doLogout () {
        return new Promise((res, rej) => {
            clientAPI.get('/logout')
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }
}
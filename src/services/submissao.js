import { clientAPI } from '../configs/config'

export default class Submissao {
    static async getSubmissao () {
        return new Promise((res, rej) => {
            clientAPI.get('/submissao')
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }

    static async postSubmissao (data) {
        return new Promise((res, rej) => {
            clientAPI.post('/submissao', data)
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }
}

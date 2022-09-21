import { clientAPI } from '../configs/config'

export default class Atividades {
    static async getAtividades (data) {
        return new Promise((res, rej) => {
            clientAPI.get('/atividades', data)
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }
}

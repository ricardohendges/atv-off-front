import { clientAPI } from '../configs/config'

export default class Rank {
    static async getRank (data) {
        return new Promise((res, rej) => {
            clientAPI.get('/rank', data)
                .then(processado => res(processado))
                .catch(err => rej(err.response))
        })
    }
}

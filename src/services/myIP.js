import { clientAPI } from '../configs/config'

export default class MyIP {
  static async getIP() {
    return new Promise((res, rej) => {
      clientAPI.get('/my-ip')
        .then(processado => res(processado))
        .catch(err => rej(err.response))
    })
  }
}
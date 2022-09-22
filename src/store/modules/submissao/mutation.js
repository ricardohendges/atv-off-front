import * as types from './mutation-types'

export default {
    [types.GET_SUBMISSAO] (state, payload) {
        state.submissao = payload.sort((a,b) => {
            if (a.sub_status < b.sub_status) return -1
            else if (a.sub_status > b.sub_status) return 1
            return 0
        })
    }
}
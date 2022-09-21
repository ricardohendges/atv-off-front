import * as types from './mutation-types'

export default {
    [types.GET_SUBMISSAO] (state, payload) {
        state.submissao = payload
    }
}
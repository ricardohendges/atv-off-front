import * as types from './mutation-types'

export default {
    [types.GET_ATIVIDADES] (state, payload) {
        state.atividades = payload
    }
}
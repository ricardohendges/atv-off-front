import * as types from './mutation-types'

export default {
    [types.GET_DUPLAS] (state, payload) {
        state.duplas = payload
    },
    [types.SET_USER] (state, payload) {
        state.userLogado = payload
    }
}
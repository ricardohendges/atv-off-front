import * as types from './mutation-types'

export default {
    [types.SET_MESSAGE] (state, payload) {
        state.message.show = payload ? true : false
        if (payload.type && payload.message) {
            state.message.type = payload.type
            state.message.message = payload.message
            state.message.detail = payload.detail
        } else {
            state.message.type = 'ERRO'
            state.message.message = payload.message ? payload.message : payload
            state.message.detail = payload?.detail
        }
    },
    [types.DROP_MESSAGE] (state) {
        state.message = { show: false }
    },
}

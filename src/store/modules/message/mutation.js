import * as types from './mutation-types'

export default {
    [types.SET_MESSAGE] (state, payload) {
        state.message.show = payload ? true : false
        if (payload.type && payload.message) {
            state.message.type = payload.type
            state.message.message = payload.message
        } else {
            state.message.type = 'ERRO'
            state.message.message = payload
        }
    },
    [types.DROP_MESSAGE] (state) {
        state.message = { show: false }
    },
}

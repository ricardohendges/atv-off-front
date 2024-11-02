import * as types from './mutation-types'

export default {
    [types.GET_IP] (state, payload) {
        state.myIP = payload
    }
}
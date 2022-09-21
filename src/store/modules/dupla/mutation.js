import * as types from './mutation-types'

export default {
    [types.GET_DUPLAS] (state, payload) {
        state.duplas = payload
    }
}
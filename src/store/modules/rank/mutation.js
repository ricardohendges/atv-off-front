import * as types from './mutation-types'

export default {
    [types.GET_RANK] (state, payload) {
        state.rank = payload
    }
}
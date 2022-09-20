import * as types from './mutation-types'

export const setMessage = async ({ commit }, data) => {
    commit(types.SET_MESSAGE, data)
}

export const dropMessage = async ({ commit }) => {
    commit(types.DROP_MESSAGE)
}

import Login from '@/services/login'
import * as types from './mutation-types'

export const doLogin = async ({ commit }, data) => {
    const request = await Login.doLogin(data)
    commit(types.SET_USER, request.data.duplas[0])
}

export const getProfile = async ({ commit }) => {
    return await Login.getProfile().then(ret => commit(types.SET_USER, ret.data))
}

export const doLogout = async ({ commit }) => {
    await Login.doLogout()
    commit(types.SET_USER, null)
}
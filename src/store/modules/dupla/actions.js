import Dupla from '@/services/dupla'
import * as types from './mutation-types'

export const getDuplas = async ({ commit }, data) => {
    const request = await Dupla.getDuplas(data)
    commit(types.GET_DUPLAS, request.data.duplas)
}
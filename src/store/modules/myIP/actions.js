import MyIP from '@/services/myIP'
import * as types from './mutation-types'

export const getIP = async ({ commit }) => {
    const request = await MyIP.getIP();
    commit(types.GET_IP, request.data.ip);
}
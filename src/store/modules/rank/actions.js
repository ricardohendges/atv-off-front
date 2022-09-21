import Rank from '@/services/rank'
import * as types from './mutation-types'

export const getRank = async ({ commit }) => {
    const request = await Rank.getRank()
    commit(types.GET_RANK, request.data.duplas)
}

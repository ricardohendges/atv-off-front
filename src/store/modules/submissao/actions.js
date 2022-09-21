import Submissao from '@/services/submissao'
import * as types from './mutation-types'

export const getSubmissao = async ({ commit }) => {
    const request = await Submissao.getSubmissao()
    commit(types.GET_SUBMISSAO, request.data.submissao)
}

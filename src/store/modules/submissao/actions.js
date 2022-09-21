import Submissao from '@/services/submissao'
import * as types from './mutation-types'

export const getSubmissao = async ({ commit }) => {
    const request = await Submissao.getSubmissao()
    commit(types.GET_SUBMISSAO, request.data.submissao)
}

export const postSubmissao = async (_context, data) => {
    return await Submissao.postSubmissao(data)
}

export const patchSubmissao = async (_context, data) => {
    const request = await Submissao.patchSubmissao(data)
    console.log(request)
}
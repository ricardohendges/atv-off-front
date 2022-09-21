import Atividades from '@/services/atividades'
import * as types from './mutation-types'

export const getAtividades = async ({ commit }, data) => {
    const request = await Atividades.getAtividades(data)
    commit(types.GET_ATIVIDADES, request.data.atividades)
}
export const getExemplos = async ({ commit }, data) => {
    const request = await Atividades.getExemplos(data)
    commit(types.GET_EXEMPLO, request.data.exemplo)
}

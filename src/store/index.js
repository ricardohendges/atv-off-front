import { createStore } from 'vuex'

import login from './modules/login'
import dupla from './modules/dupla'
import message from './modules/message'
import atividade from './modules/atividade'
import submissao from './modules/submissao'

export default createStore({
  modules: {
    dupla,
    message,
    atividade,
    login,
    submissao
  }
})
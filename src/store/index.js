import { createStore } from 'vuex'

import login from './modules/login'
import dupla from './modules/dupla'
import message from './modules/message'
import atividade from './modules/atividade'

export default createStore({
  modules: {
    dupla,
    message,
    atividade,
    login
  }
})
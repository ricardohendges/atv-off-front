import { createStore } from 'vuex'

import dupla from './modules/dupla'
import message from './modules/message'

export default createStore({
  modules: {
    dupla,
    message
  }
})
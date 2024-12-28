import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from './links'
import goods from './goods'
import bestsellers from './bestsellers'

const store = new Vuex.Store({
  modules: {
    links,
    goods,
    bestsellers
  }
})

export default store
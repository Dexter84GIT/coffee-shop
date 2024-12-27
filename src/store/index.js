import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from './links'
import goods from './goods'

const store = new Vuex.Store({
  modules: {
    links,
    goods
  }
})

export default store
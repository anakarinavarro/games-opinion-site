import Vue from 'vue'
import Vuex from 'vuex'
import { gamesModule } from './Modules/GamesModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    GamesModule: gamesModule,
  },
})

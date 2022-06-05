//import { Axios } from 'axios'
import router from '../Modules/GamesModule.js'

export const gamesModule = {
  namespaced: true,
  state: {
    games: [],
    opinions: [],
    opinion: {
      id: '',
      name: '',
      opinion: '',
    },
    showModal: false,
  },
  mutations: {
    SET_GAMES(state, newGames) {
      state.games = newGames
    },
    SET_OPINIONS(state, opinion) {
      state.opinions.push(opinion)
    },
    SET_SHOWMODAL(state, newmodal) {
      state.showModal = newmodal
    },
    SET_ELIMINAR(state, opinion) {
      state.opinions.splice(opinion, 1)
    },

    SET_EDITAR(state, payload) {
      if (!state.opinios.find((opinion) => opinion.id === payload)) {
        router.push('/opinions')
        return
      }
      state.opinion = state.opinios.find((opinion) => opinion.id === payload)
    },
    SET_UP(state, payload) {
      state.opinions = state.opinions.map((opinion) =>
        opinion.id === payload.id ? payload : opinion
      )
      router.push('/opinions')
    },
  },
  actions: {
    async getAllGames(context) {
      try {
        const games = await fetch('/games.json').then((response) => response.json())
        //const games = await Axios.get('/games.json')
        context.commit('SET_GAMES', games)
      } catch (error) {
        console.log(error)
      }
    },
    newOpinions(context, opinion) {
      context.commit('SET_OPINIONS', opinion)
    },
    OpenModal(context) {
      context.commit('SET_SHOWMODAL', true)
    },
    eliminarOpinion(context, opinion) {
      context.commit('SET_ELIMINAR', opinion)
    },

    editarOpinion(context, opinion) {
      context.commit('SET_EDITAR', opinion)
    },
    upOpinion(context, opinion) {
      context.commit('SET_UP', opinion)
    },
  },
}

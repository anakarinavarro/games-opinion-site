//import { Axios } from 'axios'

export const gamesModule = {
  namespaced: true,
  state: {
    games: [],
    opinions: [],
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
      state.opinions.splice(opinion)
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
    editarOpinion() {},
  },
  getters: {
    opinionGame(state) {
      return state.opinions.filter((opinion) => opinion.categoria === 'opinions')
    },
    adminGames(state) {
      return state.opinions.filter((opinion) => opinion.categoria === 'administracion')
    },
  },
}

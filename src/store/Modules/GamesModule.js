//import { Axios } from 'axios'

export const gamesModule = {
  namespaced: true,
  state: {
    games: [],
    opinions: [],
    opinion: {
      id: '',
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
    SET_ELIMINAR(state, payload) {
      state.opinions = state.opinions.filter((opinion) => opinion.id != payload)
    },

    SET_EDITAR(state, payload) {
      state.opinion = state.opinios.find((opinion) => opinion.id === payload)
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
    eliminarOpinion(context, id) {
      context.commit('SET_ELIMINAR', id)
    },

    editarOpinion(context, id) {
      context.commit('SET_EDITAR', id)
    },
  },
  getters: {
    getGmesAndOpinions(state) {
      const { games, opinions } = state
      const getFullData = []
      opinions.forEach((opinion) => {
        const gameOnOPinion = games.find((game) => {
          return game.id === opinion.idGame
        })
        const gameMoreOpinion = {
          ...opinion,
          game: { ...gameOnOPinion },
        }
        getFullData.push(gameMoreOpinion)
      })
      return getFullData
    },
  },
}

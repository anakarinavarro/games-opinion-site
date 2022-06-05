<template>
  <div>
    <NavBar />
    <div class="container">
      <h1 class="my-3">Administracion de Opiniones Disponibles</h1>
      <div v-if="opinions.length == 0" class="alert alert-danger" role="alert">
        No existen Opiniones por mostrar
      </div>
      <div v-else>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Persona</th>
              <th scope="col">Juego</th>
              <th scope="col">Opinion</th>
              <th scope="col">Acciones</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(opinion, $index) of opinions" :key="$index">
              <th scope="row">{{ opinion.$index }}</th>
              <td>{{ opinion.nombre }}- {{ opinion.id }}</td>
              <td>
                <span v-for="(AllGame, index) of AllGames" :key="index">
                  {{ AllGame.name }}
                </span>
              </td>
              <td>{{ opinion.opinion }}</td>
              <td>
                <button type="button" class="btn btn-danger" @click="eliminarOpinion">
                  Eliminar
                </button>
              </td>
              <td>
                <router-link
                  :opinion="opinion"
                  type="button"
                  class="btn btn-info"
                  :to="{
                    name: 'editar-View',
                    path: '/editar-View',
                  }"
                >
                  Editar
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    id: '',
  }),
  props: {
    indexOpinion: String,
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState('GamesModule', ['opinions', 'opinion']),
    ...mapState('GamesModule', {
      AllGames: (state) => state.games,
    }),
  },

  methods: {
    ...mapActions('GamesModule', ['getAllGames', 'eliminarOpinion']),
  },
}
</script>

<style></style>

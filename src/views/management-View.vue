<template>
  <div>
    <NavBar />
    <h1>vista de administracion</h1>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(opinion, $index) of opinions" :key="$index">
            <th scope="row">{{ opinion.$index }}</th>
            <td>{{ opinion.nombre }}</td>
            <td>
              <span v-for="(AllGame, index) of AllGames" :key="index">
                {{ AllGame.name === 'Grand Theft Auto V' ? 'Grand Theft Auto V' : 'Portal 2' }}
              </span>
            </td>
            <td>{{ opinion.opinion }}</td>
            <td>
              <button @click="eliminarOpinion" type="button" class="btn btn-danger">
                Eliminar
              </button>
            </td>
            <td>
              <button @click="editarOpinion" type="button" class="btn btn-info">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data: () => ({}),
  props: {
    indexOpinion: String,
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState('GamesModule', ['opinions']),
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

<template>
  <div>
    <NavBar />

    <div>
      <h1>Lista de Opiniones</h1>
      <div v-if="opinions.length === ''" class="alert alert-danger" role="alert">
        No existen opiniones por mostrar
      </div>
      <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="(opinion, $index) of opinions" :key="$index">
            Opinion creada por: {{ opinion.nombre }}. Para el juego:
            <span v-for="(AllGame, index) of AllGames" :key="index">
              {{ AllGame.name === 'Grand Theft Auto V' ? 'Grand Theft Auto V' : 'Portal 2' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
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
    ...mapActions('GamesModule', ['getAllGames']),
  },
}
</script>

<style></style>

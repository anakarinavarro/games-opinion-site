<template>
  <div>
    <div v-show="opinions.length == 0" class="alert alert-danger" role="alert">
      No existen opiniones por mostrar
    </div>
    <div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(opinion, $index) of opinions" :key="$index">
          Opinion creada por: <strong>{{ opinion.nombre }}</strong
          >. Para el juego:
          <strong
            ><span v-for="(AllGame, index) of AllGames" :key="index">
              {{ AllGame.name }}
            </span></strong
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('GamesModule', ['opinions']),
    ...mapState('GamesModule', {
      AllGames: (state) => state.games,
    }),
  },

  methods: {
    ...mapActions('GamesModule', ['getAllGames', 'newOpinions']),
    existeOpinion() {
      this.newOpinions.length === ''
    },
  },
}
</script>

<style></style>

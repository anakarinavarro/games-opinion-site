<template>
  <div class="row">
    <div
      class="card shadow-sm col-md-3 col-12 p-0 m-md-3 mb-2"
      v-for="(AllGame, $index) of AllGames"
      :key="$index"
    >
      <img :src="AllGame.background_image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ AllGame.name }}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating: {{ AllGame.rating }}</li>
          <li class="list-group-item">Released: {{ AllGame.released }}</li>
          <li class="list-group-item">Updated: {{ AllGame.updated }}</li>
        </ul>
        <button type="button" class="btn btn-primary btn-block" @click="showModal = true">
          Opinar
        </button>
      </div>
    </div>

    <modal-op :show="showModal" @close="showModal = false"> </modal-op>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import ModalOp from './ModalOp.vue'

export default {
  components: {
    ModalOp,
  },
  props: {
    categoria: { type: String, default: 'desconocida' },
  },
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    ...mapState('GamesModule', {
      AllGames: (state) => {
        return state.games
      },
    }),
    ...mapState('GamesModule', ['opinions']),
  },
  methods: {
    ...mapActions('GamesModule', ['newOpinions', 'openModal']),
  },
}
</script>

<style>
.card .btn-primary {
  background-color: #333;
  border: none;
}
</style>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="card col-3" v-for="(AllGame, $index) of AllGames" :key="$index">
          <img :src="AllGame.background_image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ AllGame.name }}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Rating: {{ AllGame.rating }}</li>
              <li class="list-group-item">Released: {{ AllGame.released }}</li>
              <li class="list-group-item">Updated: {{ AllGame.updated }}</li>
            </ul>
            <button type="button" class="btn btn-primary" @click="showModal = true">Opinar</button>
          </div>
        </div>
      </div>
    </div>
    <!--Component-->
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
      AllGames: (state) => state.games,
    }),
    ...mapState('GamesModule', ['opinions']),
  },
  methods: {
    ...mapActions('GamesModule', ['newOpinions', 'openModal']),
  },
}
</script>

<style></style>

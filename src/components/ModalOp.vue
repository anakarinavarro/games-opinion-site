<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Deja tu opinión sobre el juego:
              <span v-for="(AllGame, index) of AllGames.name" :key="index">
                {{
                  AllGame.find((name) => opinion.AllGame.name) ? 'Grand Theft Auto V' : 'Portal 2'
                }}
              </span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input
                  v-model="nameInput"
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Opinión</label>
                <textarea
                  v-model="textInput"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Tu opinión debe ir aquí..."
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              Close
            </button>
            <button @click="guardar" type="button" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    nameInput: '',
    textInput: '',
  }),
  props: {
    show: Boolean,
  },
  computed: {
    ...mapState('GamesModule', ['opinions']),
    ...mapState('GamesModule', {
      AllGames: (state) => state.games,
    }),
    ...mapGetters(['getGmesAndOpinions']),
  },
  methods: {
    ...mapActions('GamesModule', ['newOpinions', 'getAllGames']),
    guardar() {
      this.newOpinions({ nombre: this.nameInput, opinion: this.textInput })
      this.nameInput = ''
      this.textInput = ''
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>

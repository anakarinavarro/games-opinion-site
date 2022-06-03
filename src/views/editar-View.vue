<template>
  <div>
    <NavBar />
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
          v-model="textOpinion"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Tu opinión debe ir aquí..."
        ></textarea>
      </div>
      <button @click="guardar" type="button" class="btn btn-info">Guardar</button>
      <router-link type="button" class="btn btn-primary" to="/management"> Regresar </router-link>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import NavBar from '@/components/NavBar.vue'

export default {
  data: () => ({}),
  components: { NavBar },
  computed: {
    ...mapState(['opinion']),
  },
  methods: {
    ...mapActions(['editarOpinion', 'newOpinion']),
  },
  created() {
    this.editarOpinion()
  },
  guardar() {
    this.newOpinions({ nombre: this.nameInput, opinion: this.textInput })
    this.nameInput = ''
    this.textInput = ''
  },
}
</script>

<style></style>

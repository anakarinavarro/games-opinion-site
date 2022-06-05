<template>
  <div>
    <NavBar />
    <div class="container">
      <h1 class="my-3">Editar Opiniones</h1>
      <div>
        <form @submit.prevent="upOpinion(opinion)">
          <div class="form-group">
            <label for="name">{{ opinion.nombre }}</label>
            <input
              v-model="nombreEditado"
              type="text"
              class="form-control"
              id="name"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">{{ opinion.opinion }}</label>
            <textarea
              v-model="opinionEditada"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Tu opinión debe ir aquí..."
            ></textarea>
          </div>
          <router-link
            to="/management"
            type="button"
            class="btn btn-info mr-3"
            @click="guardarEditar"
          >
            Guardar
          </router-link>
          <router-link type="button" class="btn btn-outline-dark" to="/management">
            Regresar
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import NavBar from '@/components/NavBar.vue'

export default {
  data: () => ({
    opinionEditada: '',
    nombreEditado: '',
  }),
  components: {
    NavBar,
  },
  computed: {
    ...mapState(['opinions']),
  },
  methods: {
    ...mapActions(['editarOpinion', 'upOpinion', 'newOpinions']),
    guardarEditar() {
      this.editarOpinion({ nombre: this.nombreEditado, opinion: this.opinionEditada })
      this.nombreEditado = ''
      this.opinionEditada = ''
    },
  },
}
</script>

<style></style>

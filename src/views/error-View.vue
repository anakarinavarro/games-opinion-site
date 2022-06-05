<template>
  <div>
    <NavBar />
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3"><span class="text-danger">Opps!</span> Pagina no encontrada.</p>
        <p class="lead">Por favor revisa bien la url.</p>
        <router-link to="/" class="btn btn-primary">Volver al home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },
}
</script>

<style></style>

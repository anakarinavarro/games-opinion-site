<template>
  <div>
    <NavBar />
    <div class="container">
      <h1 class="my-3">Lista de Opiniones Disponibles</h1>

      <InputGames />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import InputGames from '@/components/InputGames.vue'

export default {
  components: {
    NavBar,
    InputGames,
  },
}
</script>

<style></style>

<template>
  <div>
    <NavBar />
    <div class="container">
      <h1 class="my-3">Catalogo de Juegos Disponibles</h1>
      <GamesCard />
    </div>
  </div>
</template>

<script>
import Store from '@/store'
import NavBar from '@/components/NavBar.vue'
import GamesCard from '@/components/GamesCard.vue'

export default {
  components: {
    GamesCard,
    NavBar,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('GamesModule/getAllGames')
    next()
  },
}
</script>

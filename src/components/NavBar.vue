<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-juegos">
    <router-link class="navbar-brand" to="/">
      <i class="fa fa-gamepad" aria-hidden="true"></i>
      Games Opinion
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            HOME
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/opinions">
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
            OPINIONES
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/management">
            <i class="fa fa-cog" aria-hidden="true"></i>
            ADMINISTRACION
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
.navbar.nav-juegos {
  background-color: #333 !important;
}
.navbar.nav-juegos a {
  color: #ffffff !important;
}
</style>

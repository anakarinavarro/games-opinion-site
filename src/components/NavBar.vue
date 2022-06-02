<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="game-icon-png-22.jpeg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Games Opinion
    </a>
    <ul class="navbar-nav d-flex flex-row">
      <li class="nav-item active pr-4">
        <router-link class="nav-link" to="/">
          <i class="fa fa-home" aria-hidden="true"></i>
          HOME
        </router-link>
      </li>
      <li class="nav-item active pl-2">
        <router-link class="nav-link" to="/opinions">
          <i class="fa fa-commenting-o" aria-hidden="true"></i>
          OPINIONES
        </router-link>
      </li>
      <li class="nav-item active pl-2">
        <router-link class="nav-link" to="/management">
          <i class="fa fa-cog" aria-hidden="true"></i>
          ADMINISTRACION
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>

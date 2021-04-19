<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item logo" href="/">
      <strong class="is-size-4">LOGO</strong>
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="main-navbar">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="main-navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-dark">
            <strong>Sign In</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
nav {
  padding: 25px 8px;
}

nav a {
  font-weight: 500;
  color: #2c3e50;
  transition: 0.3s ease;
}

nav a:hover, nav a:active, nav a:focus {
  color: #f03a5f;
}

.navbar-brand a.logo:hover {
  color: inherit;
}

nav a .router-link-exact-active {
  color: #f03a5f;
}
</style>
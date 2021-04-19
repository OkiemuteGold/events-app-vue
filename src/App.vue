<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/partials/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding-bottom: 100px;
}

a:hover {
  transition: 0.4s ease;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f03a5f;
}

.hero {
  background: #e52d27;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top left, #b31217, #e52d27);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top left, #b31217, #e52d27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 150px
}
.hero-body .title, .hero-body .subtitle {
  color: #fff;
}
</style>

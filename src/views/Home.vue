<template>
  <div class="home">
<!-- use / initialize component -->
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome To Our Events Page</h1>
          <h2 class="subtitle">Check out our upcoming events</h2>
          <div class="button-block">
            <button class="button is-xl is-danger is-focused">Sign Up to Browse Events</button>
          </div>
        </div>
      </div>
    </section>

    <section class="upcoming-events">
      <EventsList />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import / define component
import EventsList from '@/components/EventsList.vue'

export default {
  name: 'Home',
// export / register component
  components: {
    EventsList
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 30px 0 20px;
  font-size: 40px;
}

.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 18px;
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -100px;
}

.button-block .button {
  /* margin-right: 50px; */
  padding-left: 50px;
  padding-right: 50px;
}

/* .button-block .welcome {
  width: 400px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
} */

.is-xl {
  font-size: 1.3rem;
}
</style>

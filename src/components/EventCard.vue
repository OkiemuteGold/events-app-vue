<template>
  <div class="event-card">
    <div class="card mb-4">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="event.event_image" width="100%" :alt="event.event_image_alt">
        </figure>
        <h2 id="event_name" class="title is-size-3 has-text-weight-bold has-text-centered">{{ event.event_name }}</h2>
        <p class="event-category">{{ event.event_category }}</p>
      </div>
      
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="event.host_image" :alt="event.host_image_alt">
            </figure>
          </div>

          <div id="host" class="media-content">
            <p class="title is-size-4 has-text-weight-bold">{{ event.host }}</p>
            <p class="subtitle is-size-6">{{ event.host_occupation }}<br> 
              <span class="subtitle is-size-7 has-text-danger">Host SM Handles</span>
            </p>
          </div>
        </div>

        <div class="content event-description">
          <p class="is-size-6">{{ event.event_description }}</p>
          <small class="event-location-and-date is-size-7">
            <span>Location: {{ event.location }}</span> <br>
            <time datetime="2016-1-1">{{ event.date }}, {{ event.time }}</time>
          </small>
        </div>

        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              Share on:
              <a href="#" class="has-text-danger">Facebook </a>
              <a href="#" class="has-text-danger">Twitter</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',

  props: [
    'event'
  ]
}
</script>

<style scoped>
.card-image figure {
  position: relative;
}

.card-image figure:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.card-image figure img {
  object-fit: cover;
}

.card-image #event_name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f34165;
  opacity: 0;
  transition: 0.5s ease-in-out;
  /* animation: resize 2s ease-in-out; */
}
.card:hover #event_name {
  opacity: 1;
}
/* @keyframes resize {
  0% { font-size: 40px !important; }
  50% { font-size: 35px !important; }
  100% { font-size: 32px !important; }
} */

.event-category {
  background-color: #ff9db0;
  width: fit-content;
  padding: 1px 8px;
  position: absolute;
  bottom: 0;
}

.event-location-and-date span, .event-category {
  font-size: 13px;
}

.card-footer {
  text-align: left;
}

.card-footer span a:hover {
  color: inherit !important;
}
</style>
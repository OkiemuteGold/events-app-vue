<template>
  <div class="event-single">
    <section class="hero">
      <div class="hero-body is-flex is-justify-content-center is-align-items-center">
        <div class="container">
          <h1 class="title is-size-3">{{ event.event_name }}</h1>
          <h3 class="subtitle is-size-6"><em>{{ event.event_category }}</em></h3>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.event_description }}</p>
        <div class="loc_date_time">
          <p class="subtitle is-size-5"><strong>Location:</strong> {{ event.location }}</p>
          <p class="subtitle is-size-5 date">
            <strong>Date:</strong> {{ event.date }}
          </p>
          <p class="subtitle is-size-5 date">
            <strong>Time:</strong> {{ event.time }}
          </p>
        </div>

        <div class="columns is-multiline">
          <figure class="event-image is-4by3">
            <img :src="event.event_image" width="100%" :alt="event.event_image_alt">
          </figure>
          <!-- <div class="event-image column is-one-third">
            <img :src="event.event_image" width="100%" :alt="event.event_image_alt" />
          </div> -->
        </div>

        <div class="past-event-photos has-text-centered">
          <h2 class="subtitle is-3">Past Event Photos</h2>
          <div class="featured-image columns is-multiline has-text-centered">
            <figure v-for="image in event.featured_images" :key="image.id" class="column is-one-third">
              <img :src="`${image}`" width="100%" :alt="`${event.event_image_alt}`" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EventSingle',

  data() {
    return {
      events: [
        {
          id: 1,
          event_name: 'Charity',
          event_category: 'Fundraising',
          event_image: require('../assets/images/event/1.jpg'),
          event_image_alt: this.event_category,
          featured_images: [
            require('../assets/images/event/1.jpg'),
            require('../assets/images/event/1.jpg'),
            require('../assets/images/event/1.jpg')
          ],
          // host: 'John Doe',
          // host_occupation: 'Software Developer',
          // host_image: require('../assets/images/host/IMG_20191125_160548.jpg'),
          // host_image_alt: this.host,
          event_description: 'Fundraising for children with physical disabilities.',
          location: '1234 Allen Avenue, Lagos',
          date: '06-25-2021',
          time: '11:30pm'
        },

        {
          id: 2,
          event_name: 'Music Tour',
          event_category: 'Art And Tourism',
          event_image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          event_image_alt: this.event_category,
          featured_images: [
            'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ],
          // host: 'Gold C O',
          // host_occupation: 'Software Developer',
          // host_image: require('@/assets/images/host/IMG_20191125_160548.jpg'),
          // host_image_alt: this.host,
          event_description: 'Annual global music tour to promote art, music, and culture.',
          location: 'Oxford Ville, Victoria Island, Lagos',
          date: '12-25-2021',
          time: '11:30pm'
        },

        {
          id: 3,
          event_name: 'JavaScript Conference',
          event_category: 'Information Technology',
          event_image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          event_image_alt: this.event_category,
          featured_images: [
            'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ],
          // host: 'Brad Traversy',
          // host_occupation: 'Software Developer',
          // host_image: require('@/assets/images/host/IMG_20191125_160548.jpg'),
          // host_image_alt: this.host,
          event_description: 'JavaScript Conference to drive in fundamentals and introduce new concepts.',
          location: 'Lekki Phase I, Lagos',
          date: '12-25-2021',
          time: '11:30pm'
        }
      ],

      event: {}
    }
  },

  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
};
</script>

<style scoped>
.event-single {
  /* padding-bottom: 80px; */
}

.hero {
  margin-bottom: 70px;
}

.hero-body {
  padding: 2rem 1.5rem;
}

.event-image, .featured-image {
  margin-top: 50px;
}

.event-image img, .featured-image img {
  max-height: 350px;
  object-fit: cover;
}

.past-event-photos {
  margin-top: 100px;
}

.description {
  margin-bottom: 25px;
}

.loc_date_time p {
  margin-bottom: 10px;
}
</style>
<template>
  <div class="container events">
    <h2 class="subtitle is-3">Our Upcoming Events</h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-third">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard';

export default {
  name: 'EventsList',

  components : {
    EventCard
  },

  data() {
    return {
      event: {},

      events: [
        {
          id: 1,
          event_name: 'Charity',
          event_category: 'Fundraising',
          event_image: require('../assets/images/event/1.jpg'),
          event_image_alt: this.event_category,
          host: 'John Doe',
          host_occupation: 'Software Developer',
          host_image: require('../assets/images/host/IMG_20191125_160548.jpg'),
          host_image_alt: this.host,
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
          host: 'Gold C O',
          host_occupation: 'Software Developer',
          host_image: require('@/assets/images/host/IMG_20191125_160548.jpg'),
          host_image_alt: this.host,
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
          host: 'Brad Traversy',
          host_occupation: 'Software Developer',
          host_image: require('@/assets/images/host/IMG_20191125_160548.jpg'),
          host_image_alt: this.host,
          event_description: 'JavaScript Conference to drive in fundamentals and introduce new concepts.',
          location: 'Lekki Phase I, Lagos',
          date: '12-25-2021',
          time: '11:30pm'
        }
      ]
    }
  },
}
</script>

<style scoped>
.events {
  padding-top: 100px;
}

.events h2 {
  text-align: center;
  margin-bottom: 40px;
}
</style>
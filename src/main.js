import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

// sets the app in development mode
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/global.sass'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false

Vue.use(VScrollLock)

Vue.use(VueScrollTo, {
  offset: -60
})

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

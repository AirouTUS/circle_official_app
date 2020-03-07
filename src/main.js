import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/global.sass'
import Contentful from './models/Contentful'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faTwitter, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use({
  install: vue => {
    vue.mixin({
      data() {
        return {
          Contentful
        }
      }
    })
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

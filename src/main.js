import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/global.sass'
import Contentful from './models/Contentful'

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

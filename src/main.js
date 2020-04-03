import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/global.sass'
/*import './assets/sass/common.sass'*/
import Contentful from './models/Contentful'
import Buefy from 'buefy'

var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

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

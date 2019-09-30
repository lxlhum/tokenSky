import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'
import i18n from './lang'
import './styles/index.scss'

import * as GlobalUI from './components'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(GlobalUI)

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

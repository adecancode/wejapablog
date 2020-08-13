import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

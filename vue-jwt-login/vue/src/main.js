import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(SuiVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

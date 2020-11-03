import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import axios from './plugins/axios'
import mixin from './mixin'

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  axios,
  mixin,
  render: (h) => h(App),
}).$mount('#app');

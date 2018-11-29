import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import VueMaterial from 'vue-material';
import VueParticles from 'vue-particles'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

Vue.use(VueMaterial);
Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

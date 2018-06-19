import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueFire);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

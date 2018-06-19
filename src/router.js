import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Player from './views/Player.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/player',
      name: 'player',
      component: Player,
    },
  ],
});

<template>
  <div class="home">
    <h1>Bolão da copa 2018</h1>
    <router-link to="/player">Jogador</router-link>
    <router-link to="/admin">Administrador</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

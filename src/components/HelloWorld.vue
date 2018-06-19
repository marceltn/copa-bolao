<template>
  <div>
    <article v-for="(match, idx) in matches" :key="idx">
      <h1>{{ match.team1.name }}</h1>
    </article>

  </div>
</template>

<script>
import db from '@/firebase/firebaseInit';

export default {
  name: 'HelloWorld',
  data() {
    return {
      matches: [],
    };
  },
  firestore() {
    return {
      matches: db.collection('matches'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="wrapper">
    <Suggestions image="soledad.jpeg" title="100 years of solitude" author=" Gabriel Garcia Marquez" class="card1"></Suggestions>
    <Suggestions image="reinventing.jpeg" title="Reinventing organizations" author="Frédéric Laloux" class="card2"></Suggestions>
    <Suggestions image="goodvibes.jpeg" title="Good vibrations" author="The Beach Boys" class="card3"></Suggestions>
    <Suggestions image="gambino.png" title="This is America" author="Childish Gambino" class="card4"></Suggestions>
  </div>
</template>

<script>
  import Suggestions from "./Suggestions"
  export default {

    name: 'Inspiration',
    components: {
      Suggestions
    },

  }
</script>

<style scoped>
  .wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  }
  .card1 {
    grid-column: 1; 
    grid-row: 1;
  }
  .card2 {
    grid-column: 2; 
    grid-row: 1;
  }
  .card3 {
    grid-column: 1; 
    grid-row: 2;
  }
  .card4 {
    grid-column: 2; 
    grid-row: 2;
  }
</style>
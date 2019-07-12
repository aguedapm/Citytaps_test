<template>
  <div id="app">
    <router-link to="/" class="nav-links">Home</router-link>
    <router-link to="/inspiration" class="nav-links">Inspiration</router-link>
    <router-link to="/leaks" class="nav-links">Leaks</router-link> 
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: 0px;
  }
  .nav-links{
    color: black;
    font-size: 20px;
    letter-spacing: .4em;
    margin: 0px 60px;
    text-decoration: none;
  }
</style>

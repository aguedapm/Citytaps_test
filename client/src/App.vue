<template>
  <div id="app">
    <img class="ct-logo" src="./assets/CityTapsLogo.png">
    <div class="server-status" :class="{active: serverActive, deactive: !serverActive}">
      {{serverInformation}}
    </div>
    <example-vue-component image="user.png"></example-vue-component>
    <example-vue-component image="user.png"></example-vue-component>
  </div>
</template>

<script>
  import axios from 'axios'
  import ExampleVueComponent from "./components/ExampleVueComponent"
  export default {

    name: 'app',
    components: {
      ExampleVueComponent
    },
    data() {
      return {
        serverActive: false,
        serverInformation: '',
      }
    },
    mounted() {
      axios.get('http://127.0.0.1:3000/')
        .then((response) => {
          this.serverInformation = response.data.message
          this.serverActive = true
        })
        .catch((error) => {
          this.serverInformation = 'The CityTaps project server does not appear to be running. Please start the server and refresh the page!'
          this.serverActive = false
        })
    }
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
  .ct-logo {
    margin-top: 40px;
    width: 80%;
    max-width: 400px;
  }
  .server-status {
    margin: 40px auto 0px auto;
    width: 70%;
    border: 1px solid;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
  }
  .server-status.deactive{
    background-color: #ffc3c1;
    border-color: #ff6d6d;
    color: #ff6d6d;
  }
  .server-status.active {
    background-color: #dbffdd;
    border-color: #4f9b4c;
    color: #4f9b4c;
  }
</style>

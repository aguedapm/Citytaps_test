<template>
  <div>
    <p class="leaksMessage">These are the leaks that have occurred in the last hours: </p>
    <p class ="leaksResult">
      {{serverInformation}}
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    name: 'Leaks',
    data() {
      return {
        serverInformation: [],
      }
    },
    methods: {
      getLeaksData: function() {
        axios.get('http://127.0.0.1:3000/leaks')
          .then((response) => {
            this.serverInformation = response.data

          })
          .catch(() => {
            this.serverInformation = 'The CityTaps project server does not appear to be running. Please start the server and refresh the page!'

          })
        }
    }, 
    mounted() {
      this.getLeaksData()
    }

  }
</script>

<style scoped>
  .leaksMessage {
    padding: 10px;
  }
  .leaksResult {
    margin: auto;
    padding: 0px 40px;
  }
</style>
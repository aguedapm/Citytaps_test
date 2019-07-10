<template>
    <p>
        {{serverInformation}}
    </p>
</template>

<script>
  import axios from 'axios'
  export default {

    name: 'Leaks',
    data() {
      return {
        serverInformation: {},
      }
    },
    mounted() {
      axios.get('http://127.0.0.1:3000/leaks')
        .then((response) => {
          this.serverInformation = response.data

        })
        .catch(() => {
          this.serverInformation = 'The CityTaps project server does not appear to be running. Please start the server and refresh the page!'

        })
    }

  }
</script>

<style scoped>

</style>
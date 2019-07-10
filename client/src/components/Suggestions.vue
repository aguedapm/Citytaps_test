<template>
  <div class="suggestions">
    <div class="left">
      <img alt="Vue logo" :src="imageUrl">
    </div>
    <div class="right">
      <p>{{titlePassed}}</p>
      <p>{{authorPassed}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Suggestions",
    props: {
      image: String,
      title: String,
      author: String,
    },
    data () {
      return {
        imageUrl: require(`../assets/${this.image}`),
        titlePassed: this.title,
        authorPassed: this.author
      }
    }
  }
</script>

<style scoped>
  .suggestions {
    width: 70%;
    max-width: 300px;
    height: 140px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 40px auto;
  }
  .left {
    float: left;
    width: 80px;
    padding: 10px;
  }
  .left img {
    height: 120px;
    width: 80px;
  }
  .right {
    float: right;
    width: 190px;
    line-height: 20px;
    height: 80px;
    padding: 10px 10px 10px 0px;
    font-size: 14px;
  }
  .right p {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

</style>

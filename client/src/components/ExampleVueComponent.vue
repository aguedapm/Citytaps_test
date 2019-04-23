<template>
  <div class="example-component">
    <div class="left">
      <img alt="Vue logo" :src="imageUrl">
    </div>
    <div class="right">
      <span>This is a test component to help you understand how you can create reusable components in your code!</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExampleVueComponent",
    props: {
      image: String,
    },
    data () {
      return {
        imageUrl: require(`../assets/${this.image}`)
      }
    }
  }
</script>

<style scoped>
  .example-component {
    width: 70%;
    max-width: 300px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 40px auto;
  }
  .left {
    float: left;
    width: 80px;
    padding: 10px;
  }
  .left img {
    width: 80px;
  }
  .right {
    float: right;
    width: 190px;
    line-height: 80px;
    height: 80px;
    padding: 10px 10px 10px 0px;
    font-size: 14px;
  }
  .right span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

</style>

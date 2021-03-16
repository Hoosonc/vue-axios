<template>
  <h2>{{catagories}}</h2>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      catagories: ''
    }
  },
  created() {
    axios({
      url: 'http://123.207.32.32:8000/home/data'
    }).then(res => {
      this.catagories = res
    })
  }
}
</script>

<style scoped>

</style>

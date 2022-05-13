<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <div>{{ msg }}</div>
  <div id="title">テスト</div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'About Page'
    }
  }
}
</script>
<style>
#title{
  background-color: rgb(40, 47, 231);
}
</style>
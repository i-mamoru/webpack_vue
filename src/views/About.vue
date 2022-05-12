<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <div>{{ msg }}</div>
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
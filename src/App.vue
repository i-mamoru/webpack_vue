<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'App',
  data() {
    console.log('test')
    return {
      msg: 'HELLO VUE'
    }
  }
}
</script>
<style lang="scss">
body {
  text-align: center;
  a{
    margin: 1rem;
  }
  table {
    margin: auto;
    border-collapse: collapse;
    width: 100%;

    tr {
      th {
        background-color: gray;
        border: solid 1px black;
      }

      td {
        border: solid 1px black;
      }
    }
  }
}
</style>
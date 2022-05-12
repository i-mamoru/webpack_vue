<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <div>{{ msg }}</div>
  
  <table>
    <thead>
      <tr>
        <th></th>
        <th>名前</th>
        <th>電話</th>
      </tr>
    </thead>
    <tr>
      <th>1</th>
      <td>大原</td>
      <td>110</td>
    </tr>
    <tr>
      <th>2</th>
      <td>寺井</td>
      <td>110</td>
    </tr>
    <tr>
      <th>3</th>
      <td>中川</td>
      <td>110</td>
    </tr>
  </table>

</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Home Page'
    }
  }
}
</script>
<style lang="scss" module>
body {
  text-align: center;

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
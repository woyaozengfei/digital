<template>
  <div class="container">
    <div class="header">我是header</div>
    <div class="content">我是内容</div>
    <div class="footer">我是footer</div>
  </div>
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<style>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
  background-color:rgb(255, 239, 187);
}
.header {
  width: 100%;
  height: 100px;
}
.footer {
  position: relative;
  background-color: black;
}
</style>

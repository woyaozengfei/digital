<template>
  <div class="container">
    <div class="header">
      <div class="header_left">
        <a href="/">
          <img class="header_left-logo" src="../../assets/logo.png">
        </a>
      </div>
      <div class="header_right">
        <div class="header_right-logo">
          <el-dropdown>
            <i class="el-icon-news icon-style"></i>
            <el-dropdown-menu>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <i class="el-icon-message icon-style" @mouseover="showMessage"></i>
        </div>
      </div>
    </div>
    <div class="content">
    </div>
    <div class="footer">我是footer</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputdata: ''
    }
  },
  methods: {
    showPerson () {
      console.log(1)
    },
    showMessage () {
      console.log(2)
    }
  }
}
</script>

<style>
.container {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 10px;
}
.header {
  width: 100%;
}
.header_left {
  float: left;
}
.header_right {
  display: -webkit-flex;
  display: flex;
  font-size: 30px;
  font-style: normal;
  justify-content:flex-end;
}
.content{
  width: 100%;
}
.footer {
  position: relative;
  margin-top: 50px;
  max-width: 1280px;
}
.icon-style{
  margin-left: 10px;
  margin-top: 10px;
}
</style>

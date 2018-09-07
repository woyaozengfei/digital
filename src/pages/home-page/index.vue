<template>
  <div class="container">
    <div class="header">
      <div class="header_left">
        <a href="/">
          <img class="header_left-logo" src="../../assets/logo.png">
        </a>
      </div>
      <div class="header_right">
        <span v-if="isShowLogin" class="header_right-text" @click="showModal">请登录</span>
        <div class="header_right-logo">
          <!-- <el-dropdown size="mini" placement="bottom-start">
            <i v-if="isShowLogo" class="el-icon-news icon-style"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>我的订单</el-dropdown-item>
              <el-dropdown-item>商品管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <i class="el-icon-message icon-style" @click="showMessage"></i>
        </div>
      </div>
    </div>
    <div class="content">
    </div>
    <div class="footer">我是footer</div>
    <modal v-model="isShowModal" @close="closeModal">
    </modal>
  </div>
</template>

<script>
import Modal from 'components/model'
export default {
  components: {
    Modal
  },
  data () {
    return {
      isShowLogo: false,
      isShowLogin: true,
      inputdata: '',
      isShowModal: false
    }
  },
  methods: {
    // showPerson () {
    //   console.log(1)
    // },
    showMessage () {
      this.isShowModal = true
    },
    closeModal () {
      this.isShowModal = false
    },
    showModal () {
      this.isShowModal = true
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
.header_right-text {
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 60px;
  color: rgb(102, 102, 102);
  cursor: pointer;
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
  font-size: 30px;
  margin-left: 15px;
  margin-top: 10px;
}
</style>

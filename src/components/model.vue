<template>
<div>
  <div class="model_frame" v-bind:class="{'model-show':isShow}">
    <div class="model_header">
      <div class="model_header-title">
        <i class="el-icon-close model_header-close"></i>
      </div>
      <div class="model_header-close"></div>
    </div>
    <div class="model_content"></div>
    <div class="model_button"></div>
    <div class="model_footer"></div>
    123
  </div>
</div>
</template>
<script>
export default{
  props: {
    value: Boolean
  },
  data () {
    return {
      isShow: this.value
    }
  },
  created () {
  },
  watch: {
    value (value) {
      this.isShow = value
    }
  }
}
</script>
<style scope>
.model_frame{
  position: fixed;
  top:50%;
  left:50%;
  margin: 0 auto;
  width: 535px;
  height: auto;
  visibility: hidden;
}
.model-show{
  visibility: visible;
}
.model_header-close{

}
</style>

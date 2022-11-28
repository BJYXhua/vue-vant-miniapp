<template>
  <div class="header">
  <slot name="left"></slot>
    <span><slot name="title"></slot></span>
  <slot name="right" ></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.header{
  width: 98%;
  /* background-color: orange; */
  background-image: linear-gradient(-60deg, orange 0%, #f09819 100%);
  height: 50px;
  padding: 0 10px;
  display: flex;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 14px;
  position:fixed;
  top:0;
  z-index: 999;
  overflow: hidden;
}
.header span{
  text-align: center;
  flex: 1;
}
.iconfont{
  font-size: 4.667vw;
}
.right{
  font-size: 5vw;
  margin-right: 20px;
}
</style>

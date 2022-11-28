<template>
  <div id="editAddress">
    <!--导航栏-->
    <van-nav-bar
        title="编辑地址"
        left-text="返回"
        left-arrow
        :fixed=true
        :border=true
        @click-left="onClickLeft"
    />
    <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        style="margin-top: 3rem"
    />
  </div>
</template>

<script>
// import {Toast} from 'vant'
import areaList from './../../../../config/area'

export default {
  name: "EditAddress",
  data() {
    return {
      areaList: areaList,
      addressInfo: {}
    };
  },
  methods: {
    onClickLeft() { // 点击左边
      this.$router.back();  // 返回上一个路由
    },
    onSave(){

    },
    onDelete(){

    }

}}
</script>

<style scoped>
#editAddress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>


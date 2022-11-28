<template>
  <div id="addAddress">
    <!--导航栏-->
    <van-nav-bar
        title="新增地址"
        left-text="返回"
        left-arrow 
        @click-left="onClickLeft"/>
      <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
// 导入地址信息
import areaList from './../../../../config/area'
export default {
  data(){
    return{
       areaList,
      searchResult: [],
 }
  },
  methods: {
    onSave(content) {
      // 地址信息
      this.$router.push(
        {
          name:"myAddress",
          query:{
            name:content.name,
            tel: content.tel,
            province: content.province,
            city:content.city,
            county:content.county,
            address: content.province + content.city + content.county,
            addressDetail:content.addressDetail,
            areaCode:content.areaCode
          }
    })},
    onClickLeft() {
      this.$router.push({name:"myAddress"}); 
    },
     onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '广东科学技术职业学院',
            address: '金湾区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
   
  },
}
</script>

<style scoped>
#addAddress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>
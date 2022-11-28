<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="onClickLeft"
    />

      <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit" 
      style="margin-top: 3rem"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyAddress",
  props: [
    "name",
    "tel",
    "province",
    "city",
    "county",
    "address",
    "addressDetail",
    "areaCode",
  ],
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: this.name!=undefined?this.name:"张三",
          tel: this.tel!=undefined?this.tel:"13670350409",
          address: (this.province + this.city + this.county)?(this.province + this.city + this.county):("广东科学技术职业学院"),
          isDefault: true,
        },
        
      ],
      
    };
  },
  methods: {
    

    // 添加地址
    onAdd() {
      this.$router.push({
        name: "addAddress",
      });
    },
    // 编辑地址
    onEdit() {
      this.$router.push({
        name: "editAddress",
      });
    },
    // 返回地址
    onClickLeft() {
      this.$router.push({ name: "confirmOrder" ,
      query:{
           name: this.name!=undefined?this.name:"张三",
           address:(this.province + this.city + this.county)?(this.province + this.city + this.county):("广东科学技术职业学院"),
           tel:this.tel!=undefined?this.tel:"13000000000",
         }});
    },
  },
  updated() {
    // 更新刷新页面
    location.reload()
  },
  
};
</script>

<style scoped>
#myAddress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 200;
}
</style>

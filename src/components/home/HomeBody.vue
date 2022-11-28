<template>
<!-- HomeBody组件 -->
  <div class="homeBody">
      <HomeHeader :name='name' :img="img"></HomeHeader>
    <div class="user-data">
      <div class="user-data-item">
        <span>9</span>
        <span>点赞</span>
      </div>
      <div class="user-data-item">
        <span>1</span> 
        <span>关注</span>
      </div>
      <div class="user-data-item">
        <span>6</span>
        <span>收藏</span>
      </div>
    </div>
    <van-notice-bar
      scrollable
      text="技术是开发它的人的共同灵魂。"
      style="margin-top: 5px"
    />
    <Hometag></Hometag>

</div>
</template>

<script>
import HomeHeader from "@/components/home/HomeHeader.vue";
import Hometag from "@/components/home/Hometag.vue";
export default {
    props:['name','img'],
    components:{
        HomeHeader,Hometag
    }
}
</script>

<style >
.homeBody{
  position: relative;
   top: 50px;
}
.nav {
  display: flex;
}
.user-data {
  border-radius: 20px;
  display: flex;
  margin: 0 auto;
  width: 95%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  padding: 30px 0;
  background: #fff;
  /* background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #f6f6f6 75%, #f6f6f6 100%); */
  border-radius: 20px;
  border: 1px solid #fff;
  margin-top: 10px;
}
.user-data-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
}
.user-list {
  margin: 0 auto;
  width: 95%;
  margin-top: 10px;
}
.user-list .van-cell {
  height: 50px;
  line-height: 30px;
}
.user-list .van-cell:last-child {
  border-radius: 0px 0px 10px 10px;
}
.van-cell:first-child {
  border-radius: 10px 10px 0 0;
}
</style>
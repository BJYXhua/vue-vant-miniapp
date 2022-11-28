<template>
        <div class="imgbg">
      <router-link  :to="name!==null?'/home':'/login'">
      <div id="mylogin" >
        <img :src="img!==null?img:require('@/assets/img/wx.png')" alt="" class="headImg" />
        <span id="name">{{name?name:'游客'}}</span>
      </div>
      </router-link>
      <div class="label"><input type="text" placeholder="请编辑个性签名" v-model="value"></div>
    </div>
</template>

<script>
export default {
    props:['name','img'],
    data() {
      return {
        value:''
      }
    },
    methods:{
      slogan(){
        // 向home组件传值
        this.$bus.$emit('slogan',this.value)
      }
    }
}
</script>

<style scoped>
.imgbg {
  /* background-image: url("../assets/img/jsj.jpg"); */
  background-image: linear-gradient(-60deg, orange 0%, #f09819 100%);
  background-size: 100%;
  position: relative;
  height: 26.667vw;
  color: black;
  color: #fff;
  font-weight: bold;
 
}
.headImg {
  display: inline-block;
  /* border: 2px solid orange; */
  border-radius: 50%;
  width: 13.333vw;
  height: 13.333vw;
  /* background-image: url("../assets/img/wx.png"); */
  /* background-size: 100%; */
  vertical-align: middle;
  margin-right: 4vw;
}
#mylogin {
  /* background: #000; */
  position: absolute;
  top: 1.333vw;
  left: 8.667vw;
}

.imgbg .label {
  position: absolute;
  bottom: 5.667vw;
  left: 20.333vw;
  font-size: 1.6vw;
  font-weight: 400;
}
.imgbg .label input{
  border: none;
  background: none;
  font-size: 2.9vw;
}
</style>
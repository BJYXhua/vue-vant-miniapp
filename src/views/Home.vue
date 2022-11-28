<template>
  <div class="mycontainer">
    <!-- 头部组件 -->
    <Header>
      <template v-slot:title>
        <div>我的</div>
      </template>
      <template v-slot:right >
        <i class="iconfont right icon-swticontuichu" @click="signout "></i>
      </template>
    </Header>
    <!-- 主页 -->
  <HomeBody :name='name' :img="img"></HomeBody>
  </div>
</template>

<script>
import HomeBody from "@/components/home/HomeBody.vue";
export default {
  name: "Home",
  data() {
    return {
      name:null,
      img:JSON.parse(localStorage.getItem("img")),
      //个性签名
      value:''
    }
  },
  methods:{
    getusername(){
      this.name = localStorage.getItem("username")
    },
    // 退出登录
    signout(){
      this.name=null
      this.img=null
    }
  },
  created(){
    // 获取昵称
    this.getusername()
  },
  mounted(){
    // 获取个性签名
    this.$bus.$on('slogan',val=>{
      this.value=val
    })
  },
  components:{
    HomeBody
  }
  
};
</script>

<style scoped>

.mycontainer {
  font-size: 16px;
}

</style>

<template>
  <div id="app">
  <!-- 使用keep-alive保存切换路由时数据 -->
   <keep-alive>
    <router-view></router-view>
   </keep-alive>
    <div class="footer"  v-show="$route.meta.showFooter" @click="sendRecommendList">
      <router-link to="/index" class="routerlink" active-class="active"> <i class="iconfont icon-shouye"></i>首页</router-link>
      <router-link to="/category" class="routerlink" active-class="active"> <i class="iconfont database-fill icon-database-fill"></i>分类</router-link>
      <router-link to="/order" class="routerlink" active-class="active"><i class="iconfont icon-dingdan"></i>订单</router-link>
     <router-link to="/home" class="routerlink " active-class="active"> <i class="iconfont icon-wode"></i>我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
       // 精选推荐数据
       RecommendList: [
        {
          title: "【Mini官方招募】高新秘籍",
          content: "数万网友看过",
          src: require("@/assets/img/work miji.jpg"),
          num: 1989,
          price: 0.0,
        },
        {
          title: "开学季  少年少女醒醒开学啦！",
          content: "数万网友买过",
          src: require("@/assets/img/shool.png"),
          num: 8988,
          price: 2333.63,
        },
        {
          title: " Mini课堂学习打卡21天活动 ",
          content: "数万网友看过",
          src: require("@/assets/img/21day.jpg"),
          num: "68.1w",
          price: 0.0,
        },
        {
          title: "【java教程】如何成为一名大佬",
          content: "数万网友买过",
          src: require("@/assets/img/java.jpg"),
          num: "9.9w",
          price: 2609.68,
        },
        {
          title: "【零基础摄影速成班】 七大板块",
          content: "数万网友买过",
          src: require("@/assets/img/photo.png"),
          num: 6982,
          price: 369.88,
        },
        {
          title: "最新资讯速递 点击了解详情",
          content: "数万网友看过",
          src: require("@/assets/img/info.png"),
          num: 8888,
          price: 0.0,
        },
        {
          title: "JavaScript之Vue全解析 热门课程",
          content: "数万网友买过",
          src: require("@/assets/img/JavaScript-Vue.png"),
          num: "6.9w",
          price: 3609.92,
        },
        {
          title: "PPT演讲 演讲力就是生产力",
          content: "数万网友买过",
          src: require("@/assets/img/PPT-lecture.png"),
          num: 6635,
          price: 399.99,
        },
      ],
    }
  },
  methods:{
    sendRecommendList(){
      this.$bus.$emit('RecommendList',this.RecommendList)
    }
  },
  created(){
    this.sendRecommendList()
  },
  mounted() {
     this.sendRecommendList()
  },
  updated(){
    this.sendRecommendList()
  }
};
</script>

<style >

#app {

  /* text-align: center; */
  color: #2c3e50;
}


nav {
  /* padding: 100px; */
  top: 0%;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
a{
  text-decoration:none;
}

.footer {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 999;
  color: rgb(146, 146, 146);
  background-color: #fff;
  /* border: 1px solid #000; */
  width: 100%;
  height: 9.333vw;
  display: flex;
  font-weight: 500;
  
}
.footer .routerlink {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color:inherit;
}

.footer .iconfont {
  font-size: 4.267vw;
}
.footer .active{
  color: orange;
}
</style>

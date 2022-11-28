<template>
  <div class="IndexContainer">
    <!-- 头部组件 -->
    <Header>
      <!-- 使用自定义插槽 -->
      <template v-slot:left>
        <i class="iconfont icon-saoyisao"></i>
      </template>
      <!-- 使用自定义插槽 -->
      <template v-slot:title>
        <div>首页</div>
      </template>
      <!-- 使用自定义插槽 -->
      <template v-slot:right>
        <i class="iconfont settings right icon-settings"></i>
      </template>
    </Header>
    <!-- 首页组件部分 -->
  <IndexBody :imgs='imgs' :invTime='invTime' :Indexlist='Indexlist' ></IndexBody>
  </div>
</template>

<script>
import IndexBody from "@/components/Index/IndexBody.vue";
export default {
  name: "Index",
  data() {
    return {
      // 轮播图数据
      imgs: [
        { src: require("@/assets/img/21day.jpg"), title: "图片1" },
        { src: require("@/assets/img/aiai.png"), title: "图片1" },
        { src: require("@/assets/img/banner-.png"), title: "图片1" },
        { src: require("@/assets/img/xueba.png"), title: "图片1" },
      ],
      invTime: 2000,
      // 首页组件数据，课程教程数据
      Indexlist:{
              marjor: [
        {
          Marjorname: "Excel软件发展初始",
          detail: "Excel软件发展初始,专业的电子表格软件 点开直接→在线学习！",
          src: require("@/assets/img/EXCEL.png"),
        },
        {
          Marjorname: "Photoshop软件入门",
          detail: "Photoshop软件入门，设计师福利点开直接→在线学习！！",
          src: require("@/assets/img/ps1.png"),
        },
        {
          Marjorname: "PR基础教程开课",
          detail: "PR基础教程开课，点开直接→在线学习！",
          src: require("@/assets/img/pr-pr.png"),
        },
        {
          Marjorname: "C4D基础教程开课",
          detail: "C4D基础教程开课，三维设计软件,点开直接→在线学习！",
          src: require("@/assets/img/C4D.png"),
        },
      ],
      computeMarjor: [
        {
          Marjorname: "如何成为大神级别的专业摄影师",
          detail: "如何成为大神级别的专业摄影师,点开直接→在线学习！",
          src: require("@/assets/img/free.png"),
        },
        {
          Marjorname: "学霸招募令！更多资料等你来",
          detail: "学霸招募令！更多资料等你来~ 点开直接→在线学习！",
          src: require("@/assets/img/xueba.png"),
        },
        {
          Marjorname: "Photoshop软件入门，设计师福利",
          detail: "Photoshop软件入门，设计师福利~ 点开直接→在线学习！",
          src: require("@/assets/img/ps.png"),
        },
        {
          Marjorname: "AI基础教程开课，三维设计软件",
          detail: "AI基础教程开课，三维设计软件~ 点开直接→在线学习！",
          src: require("@/assets/img/AI.png"),
        },
      ],
      }
    };
  },
  components: {
    IndexBody
  },
  mounted(){
    // 点击视频跳转到视频组件，把参数传过去
    this.$bus.$on("indextoVideo",(list)=>{
      this.$router.push("/video/" + list.Marjorname + "/" + list.detail);
    })
  },

};
</script>

<style>

.IndexContainer {
  padding-bottom: 13.333vw;
}
.IndexBody {
  margin-bottom: 50px;
  top: 50px;
}
.IndexBody .Indexnav {
  margin-top: 55px;
}
.IndexContainer .desert {
  margin-left: 5.333vw;
  border-radius: 10px;
  margin-top: 2.333vw;
}
.text-center {
  text-align: center;
}
.majorContainer {
  width: 100%;
  font-size: 1.867vw;
}
.majorContainer h4,
p {
  text-align: center;
}

.banner-list {
  margin: 0px auto;
  padding: 10px 0;
  font-size: 1.867vw;
}
.banner-list > div {
  padding-top: 10px;
  color: #000000;
  font-size: 2.133vw;
  padding-left: 2.667vw;
}
.banner-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.banner-list li {
  padding: 0 6px;
  margin-left: 2.667vw;
  margin-top: 1.333vw;
  flex-grow: 1;
}
.banner-list li a {
  position: relative;
  width: 40vw;
  height: 26.667vw;
  display: inline-block;
  transition: transform 0.5s linear;
}
.banner-list li a img {
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 10px;
}
.cheng {
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  background: rgba(1, 1, 1, 0.5) url("../assets/img/video.png") no-repeat;
  background-position: center;
  color: white;
  border: 1px solid #000;
  display: none;
}
.banner-list li > div {
  text-align: center;
  color: #000000;
  font-size: 1.867vw;
}
.banner-list li a:hover {
  translate: all 1s;
  /* transform:scale(1.05); */
}
.banner-list li a:hover .cheng {
  display: block;
}
.Marjorcontent {
  background: #fff;
  width: 100%;
  display: inline-block;
  padding: 1.333vw;
}

/* 计算机课程 */
.computer-middle {
  background: #fff;
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  text-align: left;
}
.computer-middle ul li {
  padding-top: 2.667vw;
  padding-left: 6.667vw;
}
.computer-middle ul {
  height: 55vw;
  overflow: hidden;
}
.computer-middle ul li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* 活动专区 */
.promotionArea {
  display: flex;
  flex-direction: column;
}
.promotionArea div {
  margin: 0 2.667vw;
  flex: 1;
}
.promotionArea div img {
  width: 100%;
  height: 35.333vw;
}
.xuebaRecruit {
  background: #fff;
  padding: 1.333vw;
  margin-top: 2.667vw;
}
.xuebaTitle {
  font-weight: 600;
  padding: 1.333vw;
}

.xuebaContent p {
  font-size: 1.867vw;
  margin: 0 0 0.667vw 1.333vw;
  text-align: left;
}
</style>

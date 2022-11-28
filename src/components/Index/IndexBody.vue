<template>
  <div class="IndexBody">
    <!-- 轮播图组件 -->
    <Carousel :imgs="imgs" :time="invTime"></Carousel>
    <!-- 两端对齐nav图标组件 -->
    <Indexnav></Indexnav>
    <!-- 课程组件 -->
    <div class="majorContainer">
      <majorContainer :list="Indexlist.marjor"></majorContainer>
      <majorContainer :list="Indexlist.computeMarjor">
        <!-- 自定义插槽使用 -->
        <p>超值套课，Mini充电站叫你来充电，跟着学就对了</p>
      </majorContainer>
    </div>
    <!-- 分隔图 -->
    <img
      src="../../assets/img/desert.gif" 
      alt=""
      width="93%"
      height="100px"
      class="desert"
    />
    <!-- 计算机课程组件-->
  <Indexcomputer></Indexcomputer>
    <!-- 活动专区组件 -->
    <Indexactive></Indexactive>
  </div>
</template>

<script>
// 轮播图组件
import Carousel from "@/components/Index/Carousel";
// 图标组件
import Indexnav from "@/components/Index/Indexnav.vue";
// 计算机课程组件
import Indexcomputer from "@/components/Index/Indexcomputer.vue";
// 活动专区组件
import Indexactive from "@/components/Index/Indexactive.vue";
// 课程组件
import majorContainer from "@/components/Index/majorContainer";
export default {
  name: "IndexBody",
  props: ["imgs", "invTime", "Indexlist"],
  components: {
    Carousel,
    majorContainer,
    Indexcomputer,
    Indexnav,
    Indexactive
  },
};
</script>

<style></style>

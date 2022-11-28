<template>
  <div class="categoryContainer">
    <!-- 头部 -->
    <Header>
      <template v-slot:left>
        <i class="iconfont icon-dingyue"></i>
      </template>
      <template v-slot:title>
        <div>分类</div>
      </template>
      <template v-slot:right>
        <i class="iconfont right icon-fenlei"></i>
      </template>
    </Header>
    <!-- 搜索 -->
    <div class="categoryBody">
    <van-search
        v-model="value"
        show-action
        @search="onSearch(value)"
        @cancel="onCancel"
        shape="round"
        background="linear-gradient(-60deg, orange 0%, #f09819 100%)"
        placeholder="请输入搜索关键词"
      />
      <!-- 计算机分类 -->
     <CategoryList :classify="classify" :lists="lists"></CategoryList>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import CategoryList from "@/components/Category/CategoryList.vue"
// import Search from '../components/Search.vue';
export default {
  name: "Category",
  data() {
    return {
      active: 1,
      value: "",
      // 分类
    // 分类
  classify:{
  // 办公软件
  software: [
    {
      title: "【WPS视频教程】零基础速成班",
      content:" 软件发展初始,专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/WPS.png"),
    },
    {
      title: "【Word视频教程】入门基础速成班",
      content:" 软件发展初始,专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/word.png"),
    },
    {
      title: "【Excel视频教程】零基础速成班",
      content:" 软件发展初始,专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/Excel-app.png"),
    },
    {
      title: "【PPT视频教程】零基础速成班",
      content:" 软件发展初始,专业的电子,表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/ppt.png"),
    },
    {
      title: "【Visio视频教程】零基础速成班",
      content:" 软件发展初始,专业的电子,表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/visio.png"),
    },
  ],
  // 平面设计
  designList: [
    {
      title: "【PS视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！！海量视频等你来探索更多...",
      src: require("@/assets/img/ps-app.png"),
    },
    {
      title: "【AI视频教程】入门基础速成班",
      content:" 专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/ai-app.png"),
    },
    {
      title: "【Excel视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/Excel-app.png"),
    },
    {
      title: "【ID视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/id.png"),
    },
    {
      title: "【C4D视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/C4D-app.png"),
    },
  ],
  // 影视动画
  cartoonList: [
    {
      title: "【PR视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！！海量视频等你来探索更多...",
      src: require("@/assets/img/pr-app.png"),
    },
    {
      title: "【AE视频教程】入门基础速成班",
      content:" 专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/Ae.png"),
    },
    {
      title: "【剪映视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/jianyin.png"),
    },
    {
      title: "【An视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/An.png"),
    },
    {
      title: "【AU视频教程】零基础速成班",
      content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
      src: require("@/assets/img/AU.png"),
    },
  ],
      // UI设计
    UIdesignList: [
      {
        title: "【DW视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！！海量视频等你来探索更多...",
        src: require("@/assets/img/dw.png"),
      },
      {
        title: "【Axure视频教程】入门基础速成班",
        content:" 专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/axure.png"),
      },
      {
        title: "【Sketch视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/sketch.png"),
      },
      {
        title: "【XD视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/xd.png"),
      },
      {
        title: "【AUSE视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/mu.png"),
      },
    ],
    // 编程开发
    programming:[
      {
        title: "【JAVA视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！！海量视频等你来探索更多...",
        src: require("@/assets/img/java-app.png"),
      },
      {
        title: "【HTML视频教程】入门基础速成班",
        content:" 专业的电子表格软件点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/html.png"),
      },
      {
        title: "【VUE视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/vue.png"),
      },
      {
        title: "【C语言视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/c.png"),
      },
      {
        title: "【JQuery视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/jq.png"),
      },
      {
        title: "【Python视频教程】零基础速成班",
        content:" 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多...",
        src: require("@/assets/img/python.png"),
      },
    ]
  },
    };
  },
  components:{
  CategoryList,
   
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },

  lists(list){
    //  console.log(list);
     var lists=list.filter(item=>{
       return item.title.toLowerCase().indexOf(this.value)!=-1;
      //  return item.title.toUpperCase().indexOf(this.value)!=-1;
       
     })
     return lists
}
  },
  // computed:{
  //   softwares(){
  //     console.log("HEllo".toLowerCase().indexOf("l"));
  //   var list=this.classify.software.filter(item=>{
  //     return item.title.toLowerCase().indexOf(this.value)!=-1
  //   })
  //   return list
  // },
  //   designLists(){
  //     // console.log("hello".indexOf(""));
  //   var list=this.classify.designList.filter(item=>{
  //     return item.title.toLowerCase().indexOf(this.value)!=-1
  //   })
  //   return list
  // },
   
// },



}
</script>

<style>
.categoryBody {
  position: relative;
  top: 50px;
}

</style>

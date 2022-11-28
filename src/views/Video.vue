<template>
  <div class="video">
    <!-- 返回上一级页面 -->
    <button @click="goback" class="back"><span class="iconfont icon-fanhui5"></span></button>
    <!-- 视频组件 -->
    <VideoHeader :src="src"></VideoHeader>
    <!-- VideoNav组件 -->
    <VideoNav
      :title="title"
      :detail="detail"
      :RecommendList="RecommendList"
      :commentList="commentList"
      :commentLists="commentLists"
    ></VideoNav>
  </div>
</template>

<script>
// 视频组件
import VideoHeader from "@/components/video/VideoHeader.vue";
// 视频导航组件
import VideoNav from "@/components/video/VideoNav.vue";

export default {
  name: "Video",
  props: ["title", "detail"],
  data() {
    return {
      src: require("@/assets/img/21day.jpg"),
      // 升降序
      sortType: true,
      // 评论值
      message: "",
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
      // 评论区数据数组
      commentList: [
        {
          name: "Mini官方旗舰店",
          src: require("@/assets/img/logo.png"),
          content: "宝宝们，有问题可以留言评论区哦~",
          date: "5-5",
          dot: "2.3w",
          list: [
            {
              name: "自律达人",
              src: require("@/assets/img/pencil.png"),
              content: "动手做很重要！动手做很重要！动手做很重要！",
              date: "4-6",
            },
            {
              name: "我爱炸鸡~",
              src: require("@/assets/img/headimg1.jpg"),
              content: "讲的挺好，基础挺详细的，准备进阶高级教程！",
              date: "5-1",
            },
            {
              name: "不学完不睡觉",
              src: require("@/assets/img/headimg6.jpg"),
              content: "学完了，再回来复习，二刷路过~加油鸭哈哈~",
              date: "5-3",
            },
          ],
        },
        {
          name: "不学完不睡觉",
          src: require("@/assets/img/headimg6.jpg"),
          content: "学完了，再回来复习，二刷路过~加油鸭哈哈~",
          date: "5-3",
          dot: 456,
        },
        {
          name: "我爱炸鸡~",
          src: require("@/assets/img/headimg1.jpg"),
          content: "讲的挺好，基础挺详细的，准备进阶高级教程！",
          date: "5-1",
          dot: "1.1w",
        },
        {
          name: "读书使我快乐~",
          src: require("@/assets/img/headimg2.png"),
          content: "对于热爱设计的小伙伴来说，这个视频讲的不错",
          date: "4-1",
          dot: 299,
        },
        {
          name: "不能睡懒觉！",
          src: require("@/assets/img/headimg3.jpg"),
          content: "熬夜看视频，有没有朋友还没睡的一起学习呀！",
          date: "4-3",
          dot: "1w",
        },
        {
          name: "自律达人",
          src: require("@/assets/img/pencil.png"),
          content: "动手做很重要！动手做很重要！动手做很重要！",
          date: "4-6",
          dot: "2.4",
        },
        {
          name: "爱笑的娃子",
          src: require("@/assets/img/headimg5.jpg"),
          content: "我个人的计划：好好干几年，然后退休当咸鱼！",
          date: "4-11",
          dot: 666,
        },
      ],
    };
  },
  beforeCreate() {
    //   console.log(this.src);
  },
  components: {
    VideoHeader,
    VideoNav,
  },
  mounted() {
    this.$bus.$on("RecommendList", (data) => {
      //  console.log(data);
      this.RecommendList = data;
    });
    // 发送的数据接受并添加在数据列表评论里
    let name = localStorage.getItem("username");

    this.$bus.$on("sendMsg", (val) => {
      // 使用时间
      var date = new Date();
      var img = JSON.parse(localStorage.getItem("img"));
      let youke = require("../assets/img/hmbb.jpg");
      img = img ? img : youke;
      let Newcomment = {
        name: localStorage.getItem("username"),
        src: img,
        content: val,
        date: date.getMonth() + 1 + "-" + date.getDate(),
        dot: 1,
      };
      if (name) {
        this.commentList.unshift(Newcomment);
      } else {
        this.$dialog.alert({
          title: "评论失败！",
          message: "请登录账号，即可评论！",
          theme: "round-button",
        });
      }
    });

    // 接收到组件自定义事件处理，加入购物车
    this.$bus.$on("addGoods", (val) => {
      this.$dialog.alert({
        title: val,
        message: "加入购物车成功！",
        theme: "round-button",
      });
    });
    // 点赞操作
    this.$bus.$on("like", (val) => {
      val.style.color = "red";
    });
    this.$bus.$on("commentlike", (val) => {
      this.commentLists.filter((item, index) => {
        console.log(index);
        console.log("val-index", val.index);
        if (val.index === index) {
           val.like[val.index].style.color = "red";
        }
      });
    });
    // 收藏操作
    this.$bus.$on("collection", (val) => {
      val.style.color = "red";
    });

    // 评论按时间排序
    this.$bus.$on("sort", () => {
      this.sortType = !this.sortType;
    });

    // 点关注
    this.$bus.$on("VideoConcern", (val) => {
      val.innerHTML = "已关注";
    });
  },
  methods: {
    // 返回上一级页面
    goback() {
      this.$router.go(-2);
    },
  },
  computed: {
    // 按时间排序
    commentLists() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.commentList.sort((date1, date2) => {
        return this.sortType === true
          ? new Date(date2.date) - new Date(date1.date)
          : new Date(date1.date) - new Date(date2.date);
      });
    },
  },
};
</script>

<style>
/* 返回首页 */
.back{
  position:absolute ;
  border: none;
}
.icon-fanhui5 {
  position: absolute;
  top: 2.333vw;
  left: 1.333vw;
  bottom: 0;
  z-index: 99;
  color: #fff;
}
/* 视频 */
.video {
  padding-bottom: 13.334vw;
}
</style>

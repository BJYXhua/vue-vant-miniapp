<template>
  <!-- 视频页面简介 -->
  <div class="introduction">
    <!-- 视频发布者 -->
    <div class="videoheadImg">
      <img src="../../assets/img/logo.png" alt="" />
      <div class="titleBox">
        Mini官方旗舰店教程<br />
        <sub>99.9w粉丝</sub> 
        <sub>19视频</sub>
      </div>
      <div class="videoheadRight"><button @click="VideoConcern" ref="concern">+ 关注</button></div>
    </div>
    <div class="videotitleContent">
      <div class="hot">
        <i class="iconfont icon-meeting"></i> <span>热门</span>
      </div>
      <div class="videotitle">{{ title }} {{ detail }}</div>
    </div>
    <!-- 分享点赞收藏添加购物车操作 -->
    <div class="share">
      <button @click="like" ref="like">
        <i class="iconfont icon-tuijian dz"></i> <br /><span>8.8w</span>
      </button>
      <button @click="collection" ref="collection">
        <i class="iconfont icon-xihuan"></i> <br />
        <span>收藏</span>
      </button>
      <button @click="addGoods">
        <i class="iconfont icon-shouye1"></i> <br />
        <span>加入购物车</span>
      </button>
      <button @click="showShare = true">
        <i class="iconfont icon-fenxiang"></i> <br /><span>2022</span>
      </button>
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
      />
    </div>
    <!-- 精选推荐组件 -->
    <Recommend :RecommendList="RecommendList"></Recommend>
  </div>
</template>

<script>
import Recommend from "@/components/Recommend.vue";
export default {
  props: ["title", "detail", "RecommendList"],
  data() {
    return {
      // 分享
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  components: {
    Recommend, 
  },
  methods: {
    // 向父组件传值
    // 收藏操作
    collection() {
      this.$bus.$emit("collection", this.$refs.collection);
    },
    // 点赞操作
    like() {
      this.$bus.$emit("like", this.$refs.like);
    },
    // 加入购物车操作
    addGoods() {
      this.$bus.$emit("addGoods", this.title);
    },
    VideoConcern(){
      this.$bus.$emit("VideoConcern", this.$refs.concern);
    }
  },
};
</script>

<style>
/* 视频头像店名 关注 */
.videoheadImg {
  display: flex;
  justify-content: space-around;
  font-size: 2.667vw;
}

.videoheadImg img {
  width: 10.667vw;
  height: 10.667vw;
  border: 1px solid #eee;
  border-radius: 50%;
  margin: 2.667vw;
}

.videoheadImg .titleBox {
  margin-top: 2.667vw;
  font-size: 3.67vw;
}

.videoheadImg .titleBox sub {
  /* font-size: 1.333vw; */
  padding-right: 1.333vw;
}

.videoheadRight {
  margin: 20px;
  margin-left: 50px;
}

.videoheadRight button {
  width: 16.667vw;
  height: 7vw;
  background: orange;
  border: none;
  border-radius: 1.333vw;
  color: #fff;
}

/* 热门 标题详情 */
.videotitleContent {
  padding-left: 9vw;
  display: flex;
  /* justify-content: space-around; */
  border-bottom: 1px solid rgb(240, 240, 240);
  padding-bottom: 2.333vw;
}

.hot {
  color: orange;
  border: 1px solid #eee;
  border-radius: 2.667vw;
  width: 13.667vw;
  text-align: center;
}

.videotitleContent .hot span {
  font-size: 2vw;
}

.videotitleContent .hot i {
  font-size: 4.5vw;
  vertical-align: middle;
}

.videotitleContent .videotitle {
  font-size: 3.2vw;
  margin-left: 2.667vw;
  width: 70.667vw;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* 分享点赞收藏 */
.share {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 1.333vw;
  border-bottom: 1px solid rgb(241, 241, 241);
  padding-bottom: 2.667vw;
}

.share button {
  border: none;
  background: none;
}

.share span:last-child {
  margin-top: 1vw;
}

.share span:nth-last-child(1) > span {
  padding-top: 20px;
}

.icon-fenxiang {
  font-size: 3.5vw;
}
</style>

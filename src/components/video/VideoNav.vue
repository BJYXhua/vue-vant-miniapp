<template>
  <div class="videoNav">
    <van-tabs v-model="active">
      <van-tab title="简介">
        <!-- 简介组件 -->
        <introduction
          :title="title"
          :detail="detail"
          :RecommendList="RecommendList"
        ></introduction> 
      </van-tab>
      <van-tab title="评论">
        <!-- 输入评论组件 -->
        <InputComment></InputComment>
        <!-- 评论区 -->
        <VideoComment
          :commentList="commentList"
          :commentLists="commentLists"
        ></VideoComment> 
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 输入框组件
import InputComment from "@/components/video/InputComment.vue";
// 简介组件
import introduction from "@/components/video/Videointroduction.vue";
// 评论区组件
import VideoComment from "@/components/video/VideoComment.vue";
export default {
  props: [
    "title",
    "detail",
    "RecommendList",
    "commentList",
    "commentLists",
  ],
  data() {
    return {
      // 显示在哪一个页，0简介1评论
      active: 0,
    };
  },
  components: {
    introduction,
    InputComment,
    VideoComment,
  },
};
</script>

<style></style>

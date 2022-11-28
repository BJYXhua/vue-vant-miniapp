<template>
<!-- 评论区内容组件 -->
  <div class="videoComment">
    <div class="commentTitle">
      <span>热门评论</span>
      <span @click="sort">
        <i class="iconfont icon-gengduo"></i>按时间</span>
    </div>
    
    <div
      class="commentContainer"
      v-for="(item, index) in commentLists"
      :key="index"
    >
      <!-- 评论的主人 头像名字 -->
      <div class="commentheadImg">
        <img :src="item.src" alt="" />
        <div class="commentName">
          {{ item.name }}<br />
          <sub class="time">{{ item.date }}</sub>
        </div>
      </div>
      <!-- 评论内容 -->
      <div class="commentContent">
        {{ item.content }}
      </div>
      <!-- 点赞 评论  -->
      <div class="commentShare">
        <button @click="like(index)" ref="commentlike">
          <i class="iconfont icon-tuijian dianzan"></i>{{ item.dot }}
        </button>
        <button><i class="iconfont icon-bad"></i></button>
        <button><i class="iconfont icon-pinglun"></i></button>
      </div>
      <div>
        <div
          class="anotherComment"
          v-for="(list, index) in item.list"
          :key="index"
        >
          <span class="commnetName">{{ list.name }}</span> :
          {{ list.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['commentList','commentLists'],
    methods:{
        sort(){
            this.$bus.$emit('sort')
        },
        like(index){
           this.$bus.$emit("commentlike", {index:index,like:this.$refs.commentlike});
           console.log(this.$refs.commentlike[index]);
        }
    }
};
</script>

<style scoped>
/* 评论区 */
.commentTitle {
  display: flex;
  justify-content: space-between;
  margin: 2.333vw;
}

.icon-gengduo {
  vertical-align: middle;
}
.commentheadImg {
  display: flex;
}
.commentheadImg img {
  width: 8.667vw;
  height: 8.667vw;
  border: 1px solid #eee;
  border-radius: 50%;
  margin: 2.667vw;
}
.commentheadImg .commentName {
  margin: 2.667vw;
}
/* 多行省略 */
.commentContent {
  margin-left: 15vw;
  padding-left: 1.8vw;
  padding-right: 2.667vw;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.commentShare {
  display: flex;
  margin-left: 10vw;
}
.commentShare button {
  border: none;
  background: none;
  padding: 0 20px;
  padding-top: 1.5vw;
}
button .iconfont {
  font-size: 3.4vw;
}
.dianzan {
  /* color: #aaa; */
}
/* 点别人评论的评论区 */
.anotherComment {
  margin-left: 15vw;
  height: 5.333vw;
  margin-top: 2.667vw;
  padding-right: 2.667vw;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.commnetName {
  color: orange;
}
</style>

<template>
  <div>
       <div
              class="commentBody"
              v-for="(item, index) in commentList"
              :key="index"
            >
              <div class="comentItem">
                <div class="itemtitle">
                  <div>
                    <img :src="item.headimg" alt="头像" class="miniImg" />
                    <span class="store"
                      >{{ item.storeName }}
                      <van-badge>
                        <van-icon
                          name="store"
                          class="iconfont icon-shangcheng"
                        /> </van-badge
                    ></span>
                  </div>
                  <span class="awaitcomment" v-if="!item.state">待评价</span>
                  <span v-else>已评价</span>
                </div>
                <div class="itemcontent">
                  <img :src="item.src" alt="2222" class="ItemImg" />
                  <div class="itemWenzi">
                    <span>{{ item.title }}</span>
                    <br />
                    <van-badge style="width: 70px; right: 40px">
                      <div class="child" />
                      <template #content> {{ item.discount }} </template>
                    </van-badge>
                  </div>
                  <div class="itemPrice">
                    <span class="topPrice">￥{{ item.price }}</span>
                    <span class="bottonNum"> × 1</span>
                  </div>
                </div>
              </div>
              <div class="Itemoperate">
                <van-button plain type="warning" size="mini"
                  >欢迎下次光临</van-button
                >
                <van-button
                  plain
                  type="warning"
                  size="mini"
                  @click="showShare = true"
                  >分享</van-button
                >
                <van-share-sheet
                  v-model="showShare"
                  title="立即分享给好友"
                  :options="options"
                />
                <!-- <van-button plain type="danger" size="mini"
                  >立即评价</van-button
                > -->
              </div>
              <!-- 评星 -->
              <div class="commentRate">
                <span v-if="item.state">期待下次光临~</span>
                <span v-else> 商品好不好，评价一下吧~ </span>
                <van-rate v-model="item.state" size="24px" />
              </div>
            </div>
  </div>
</template>

<script>
export default {
name:"CommentBody",
props:["commentList","options"],
data(){
    return{
       showShare: false,

    }
}
}
</script>

<style>

</style>
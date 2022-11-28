<template>
  <div>
                 <!-- 评价头部 点赞浏览评论 -->
            <div class="commentHeadImg">
              <img :src="img ? img : require('@/assets/img/hmbb.jpg')" alt=""  @click="toHome"/>
              <span class="headItem">
                <van-badge dot><i>999</i></van-badge
                ><i>已评价</i>
              </span>
              <span class="headItem">
                <van-badge :content="9" max="99"><i>99</i></van-badge>
                <i>获赞</i>
              </span>
              <span class="headItem">
                <van-badge :content="1" max="99"><i>29</i></van-badge
                ><i>获评论</i>
              </span>
              <span class="headItem">
                <van-badge dot><i>4.6w</i></van-badge> <i>被浏览</i>
              </span>
            </div>

            <p class="commenthead">
              <span>我的评价</span>
              <span
                >查看全部 <i class="iconfont icon-icon-arrow-right"></i>
              </span>
            </p>
  </div>
    
</template>

<script>


export default {
  props:['img']
  ,methods:{
    toHome(){
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
<template>
            <div class="Recommend">
            <h2><i class="iconfont icon-cainixihuan"></i> 精选推荐</h2>
            <div class="RecommendContent">
              <div class="RecommendItem" v-for="(item,index) in RecommendList" :key="index">
                <img :src="item.src" alt="" class="RecommendImg"/>
                <p>{{item.title}}</p>
                <p>{{item.content}}</p>
                <p class="RecommendPrice">
                  <span>￥{{item.price}}</span><span>已卖{{item.num}}次</span>
                </p>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name:'Recommend',
    props:['RecommendList'],
    data() {
        return {
           
        }
    },
    
}
</script>

<style scoped>
/* 精品推荐 */
.Recommend h2 {
  line-height: 50px;
  /* background-color: antiquewhite; */
  border: 2px solid #eee;
  border-left: none;
  border-right: none;
  text-align: center;
  color: rgb(241, 34, 34);
}

.Recommend h2 i {
  vertical-align: middle;
}

.Recommend {
  margin-top: 6.667vw;
}
.RecommendContent {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.RecommendContent .RecommendItem {
  width: 49%;
  height: 55vw;
  background: #fff;
  margin-bottom: 1.333vw;
}

.RecommendItem > img {
  margin: 0 auto;
  display: block;
  width: 200px;
  padding-top: 10px;
}

.RecommendItem p {
  text-align: left;
  padding: 0 10px;
}
.RecommendItem .RecommendImg{
  width: 100%;
  height: 26.667vw;
}
.RecommendItem p:nth-of-type(2) {
  color: #aaa;
}

.RecommendPrice {
  display: flex;
  justify-content: space-between;
}

.RecommendPrice span:first-child {
  color: red;
  font-size: 16px;
}
</style>
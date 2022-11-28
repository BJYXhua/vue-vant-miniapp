<template>
          <div class="text-center">
          <h4>
            <i class="iconfont border bottom-fill icon-borderbottom-fill"></i>
            课程详情
          </h4>
         <slot>今日首页推荐 优秀入门零基础课程</slot>
          <ul class="banner-list"> 
            <li
              v-for="(item, index) in list"
              :key="index"
              @click="indextoVideo(item)"
            >
              <a href="#" class="list-1" :title="item.Marjorname">
                <img :src="item.src" alt="" />
                <span class="cheng"></span>
                <span class="Marjorcontent">{{ item.detail }} </span>
              </a>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
    name:"majorContainer",
    props:['list'],
    methods:{
        indextoVideo(list){
            this.$bus.$emit('indextoVideo',list)
        }
    }
}
</script>

<style>

</style>
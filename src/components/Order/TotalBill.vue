<template>
  <!-- 全部 -->
  <div class="totalBill">
    <van-card
      v-for="(item, index) in allOrderList"
      :key="index"
      num="1"
      :price="item.price"
      :desc="item.detail"
      :title="item.title"
      :thumb="item.src"
      
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.discount }}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="backfee(item.title)" >申请退款</van-button>
        <van-button size="mini" @click="toVideo(index)">查看课程</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import { Notify } from 'vant';
export default {
  props: ["allOrderList"],
  methods: {
      toVideo(index){
          this.$emit('toVideo',{index:index,list:this.allOrderList})
      },
      backfee(title){
           Notify({ type: 'danger', message: `${title} 不能申请退款!` });
      },
  },
};
</script>

<style></style>

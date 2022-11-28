<template>  
   <div class="waitBill">
            <van-card
              v-for="(item, index) in paymentList"
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
              <template #footer class="obligationFooter">
                <van-button size="mini" @click="cancel(index)">取消付款</van-button>
                <van-button size="mini" @click="toPay(index)">去付款</van-button>
              </template>
            </van-card>
          </div>
</template>

<script>
export default {
    props:["paymentList","cancel","toPay"]

}
</script>

<style>

</style>
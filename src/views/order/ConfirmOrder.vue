<template>
  <div class="">
    <!-- 返回订单页 -->
    <van-nav-bar
      title="提交订单"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <!--收货地址、商品展示-->

    <van-contact-card
      v-if="!name"
      add-text="选择收货地址"
      @click="chooseAddress"
      style="margin-top: 3rem"
    />
    <van-contact-card
      v-else
      type="edit"
      :name="name+' '+address"
      :tel="tel"
      :editable="true"
      @click="chooseAddress"
    />
    <van-cell-group style="margin-top: 0.6rem">
      <van-cell :title="`${$route.query.detail?$route.query.detail:'视频教程更多视频等你来买！'} `" is-link>
        <div>
          <img :src="$route.query.src?this.$route.query.src:require('@/assets/img/c.png')" alt="" style="width: 10rem" />
        </div>
      </van-cell>
    </van-cell-group>
    <!--支付方式-->
    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="支付方式" value="微信" />
    </van-cell-group>
    <!--备注-->
    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="备注">
        <label>
          <input type="text" placeholder="选填，备注您的需求" />
        </label>
      </van-cell>
    </van-cell-group>
    <!--商品金额、配送费-->
    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额" :value="`￥${$route.query.price?$route.query.price:'1899.89'}`" />
      <van-cell title="配送费" value="0" />
    </van-cell-group>
    <!-- 提交订单 -->
    <van-submit-bar button-text="提交订单" @submit="onSubmit">
      <template #tip> 你的收货地址不支持配送, <span>修改地址</span> </template>
    </van-submit-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  props: ["address", "tel", "name"],
  data() {
    return {
    };
  },
  methods: {
    back() {
      this.$router.push("/order");
    },

    onSubmit() {
      Dialog.alert({
        message: "余额不足",
      }).then(() => {
        close;
      });
    },
    // 我的地址
    chooseAddress() {
      this.$router.push({ name: "myAddress" });
    },
  },
  updated() {
    console.log(this.$route.query.name);
  },
};
</script>

<style>
.van-contact-card--add .van-cell__left-icon {
  color: orange !important;
}
</style>

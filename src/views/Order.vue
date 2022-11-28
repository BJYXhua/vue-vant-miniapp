<template>
  <div class="orderContainer">
    <!-- 头部组件 -->
    <Header>
      <template v-slot:left>
        <i class="iconfont icon-saoyisao"></i>
      </template>
      <template v-slot:title>
        <div>我的订单</div>
      </template>
      <template v-slot:right>
        <i class="iconfont settings right icon-settings"></i>
      </template>
    </Header>
    <!-- 订单主体部分 -->
    <div class="OrderBody">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <!-- 全部组件 -->
          <TotalBill
            :allOrderList="allOrderList"
            @toVideo="toVideo"
          ></TotalBill>
          <!-- 精品推荐组件 -->
          <Recommend :RecommendList="RecommendList"></Recommend>
        </van-tab>
        <van-tab title="代付款">
          <!-- 优惠券单元格 -->
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
          <!-- 优惠券列表 -->
          <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px"
            editable="true"
          >
            <van-coupon-list
              v-model="couponsVal"
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange"
              @exchange="onExchange"
              exchange-button-text
            />
          </van-popup>
          <!-- 代付款组件 -->
          <div class="waitBill">
            <WaitBill
              :paymentList="paymentList"
              :cancel="cancel"
              :toPay="toPay"
            ></WaitBill>
          </div>
          <!-- 精选推荐组件 -->
          <Recommend :RecommendList="RecommendList"></Recommend>
        </van-tab>

        <van-tab title="评价">
          <div class="comment">
            <!-- 评价头部组件 -->
            <Comment :img="img"></Comment>
            <!-- 每一个订单子组件 -->
            <CommentBody
              :commentList="commentList"
              :options="options"
            ></CommentBody>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// 精选推荐组件
import Recommend from "@/components/Recommend.vue";
// 全部订单的组件
import TotalBill from "@/components/Order/TotalBill.vue";
// 待付款
import WaitBill from "@/components/Order/WaitBill.vue";

// 评价相关组件
import Comment from "@/components/Order/Comment.vue";
import CommentBody from "@/components/Order/CommentBody.vue";
import { Dialog } from "vant";
const coupon = {
  id: 1,
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  description: "描述信息",
  reason: "已失效",
  value: 1200,
  name: "满150减12元",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "12",
  unitDesc: "元",
};

export default {
  data() {
    return {
      // 优惠卷
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      couponsVal: "",
      // 定位到：0全部1代付款2评价
      active: 0,
      img: JSON.parse(localStorage.getItem("img")),
      // 全部数据
      allOrderList: [
        {
          title: "【Au视频教程】零基础速成班",
          detail:
            "Au视频教程专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/AU.png"),
          headimg: require("@/assets/img/logo.png"),
          storeName: "mini官方旗舰店",
          price: 1099.99,
          discount: "超级优惠价",
          state: 4,
        },
        {
          title: "【C4D视频教程】零基础速成班 ",
          detail:
            "【C4D视频教程】零基础速成班 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/C4D-app.png"),
          headimg: require("@/assets/img/headimg5.jpg"),
          storeName: "深度学习个人店",
          price: 2900.78,
          discount: "优惠价",
          state: 0,
        },
        {
          title: "【Visio视频教程】零基础速成班",
          detail:
            "【Visio视频教程】零基础速成班专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/visio.png"),
          headimg: require("@/assets/img/hmbb.jpg"),
          storeName: "海绵宝宝努力学习",
          price: 3200.89,
          discount: "优惠价",
          state: 0,
        },
        {
          title: "【JAVA视频教程】零基础速成班",
          detail:
            "【JAVA视频教程】零基础速成班专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/java-app.png"),
          headimg: require("@/assets/img/logo.png"),
          storeName: "mini官方旗舰店",
          price: 4600.69,
          discount: "享受优惠价",
          state: 0,
        },
        {
          title: "【Python视频教程】零基础速成班",
          detail:
            "【Python视频教程】零基础速成班专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/python.png"),
          headimg: require("@/assets/img/headimg5.jpg"),
          storeName: "深度学习个人店",
          price: 2300.88,
          discount: "超级优惠价",
          state: 0,
        },
        {
          title: "【JQuery视频教程】零基础速成班",
          detail:
            "【JQuery视频教程】零基础速成班 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/jq.png"),
          headimg: require("@/assets/img/headimg5.jpg"),
          storeName: "深度学习个人店",
          price: 1888.88,
          discount: "超级优惠价",
          state: 0,
        },
      ],
      // 代付款数据
      paymentList: [
        {
          title: "【VUE视频教程】零基础速成班",
          detail:
            "VUE视频教程专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/vue.png"),
          price: 3299.39,
          discount: "优惠价",
        },
        {
          title: "【C语言视频教程】零基础速成班",
          detail:
            "C语言视频教程专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/c.png"),
          price: 2665.89,
          discount: "享受优惠价",
        },
      ],
      // 评价数据
      value: 0,
      commentList: [
        {
          title:
            "Au视频教程专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/AU.png"),
          headimg: require("@/assets/img/logo.png"),
          storeName: "mini官方旗舰店",
          price: 1099.99,
          discount: "超级优惠价",
          state: 4,
        },
        {
          title:
            "【C4D视频教程】零基础速成班 专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/C4D-app.png"),
          headimg: require("@/assets/img/headimg5.jpg"),
          storeName: "深度学习个人店",
          price: 2900.78,
          discount: "优惠价",
          state: 0,
        },
        {
          title:
            "【Visio视频教程】零基础速成班专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/visio.png"),
          headimg: require("@/assets/img/hmbb.jpg"),
          storeName: "海绵宝宝努力学习",
          price: 3200.89,
          discount: "优惠价",
          state: 0,
        },
        {
          title:
            "【JAVA视频教程】零基础速成班专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/java-app.png"),
          headimg: require("@/assets/img/logo.png"),
          storeName: "mini官方旗舰店",
          price: 4600.69,
          discount: "享受优惠价",
          state: 0,
        },
        {
          title:
            "【Python视频教程】零基础速成班专业的软件入门，设计师福利 点开直接→在线学习！海量视频等你来探索更多",
          src: require("@/assets/img/python.png"),
          headimg: require("@/assets/img/headimg5.jpg"),
          storeName: "深度学习个人店",
          price: 2300.88,
          discount: "超级优惠价",
          state: 0,
        },
      ],

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
      RecommendList: [],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },

    onExchange(code) {
      console.log(code);
      this.coupons.push(coupon);
    },
    // 跳转视频页,把订单当前的数据传入视频页面
    toVideo(list) {
      this.$on("toVideo", list);
      this.$router.push(
        "/video/" +
          list.list[list.index].title +
          "/" +
          list.list[list.index].detail
      );
      console.log(list.list[list.index]);
    },

    // 取消付款
    cancel(index) {
      // console.log(index);
      Dialog.confirm({
        title: "提示",
        message: "确定取消付款?",
      })
        .then(() => {
          this.paymentList.splice(index, 1);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    // 申请退款
    apply() {
      Dialog.alert({
        message: "亲~不能退款哦",
      }).then(() => {
        close;
      });
    },
    // 去支付
    toPay(index) {
      // console.log(this.paymentList[index].src);
      this.$router.push({
        path: "/confirmOrder",
        query: {
          title: this.paymentList[index].title,
          price: this.paymentList[index].price,
          detail: this.paymentList[index].detail,
          src: this.paymentList[index].src,
        },
      });
    },
  },
  mounted() {
    //  获取精选推荐数据
    this.$bus.$on("RecommendList", (data) => {
      //  console.log(data);
      this.RecommendList = data;
    });
  },
  updated() {
    this.$bus.$on("RecommendList", (data) => {
      this.RecommendList = data;
    });
  },
  // 组件：精选推荐组件，全部订单组件
  components: {
    Recommend,
    TotalBill,
    WaitBill,
    Comment,
    CommentBody,
  },
};
</script>

<style>
.orderContainer {
  padding-bottom: 33.333vw;
}

.OrderBody {
  position: relative;
  top: 50px;
}

.totalBill {
  width: 100%;
  /* text-align: center; */
}

/* 评价 */

.commentBody {
  background: #fff;
  padding-bottom: 2.667vw;
}

.commenthead {
  display: flex;
  justify-content: space-between;
  line-height: 45px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin: 0;
  /* margin-top: 2px; */
  background: #fff;
}

.commenthead span {
  margin: 0 20px;
  font-size: 1.867vw;
}

.commenthead span i {
  vertical-align: text-top;
  font-size: 1.867vw;
  line-height: 14px;
}

.commentHeadImg {
  background: #fff;
  display: flex;
  justify-content: space-around;
  padding: 0.667vw 0;
}

.commentHeadImg img {
  display: inline-block;
  width: 18.667vw;
  height: 18.667vw;
  border-radius: 50%;
  margin-left: 5.667vw;
}

.commentHeadImg .headItem {
  margin-top: 5.867vw;
  font-size: 2.133vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 30px;
  /* padding: 0 10px; */
  padding-right: 4vw;
  border-right: 1px solid #ccc;
}
.commentHeadImg .headItem:last-child {
  border-right: none;
}

.van-badge i {
  padding: 0 5px 5px 5px;
}

.comentItem {
  font-size: 2.5vw;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 2.267vw;
}
.comentItem .ItemImg {
  width: 23vw;
}
.comentItem .itemtitle {
  padding-left: 2.333vw;
  display: flex;
  justify-content: space-between;
  margin-top: 2.667vw;
  /* line-height: 4vw; */
  font-size: 3.667vw;
}

.icon-shangcheng {
  vertical-align: middle;
  color: orange;
  font-size: 3.533vw;
}

.miniImg {
  height: 6.333vw;
  width: 6.333vw;
  margin-right: 2.067vw;
}

.store {
  vertical-align: top;
}

.itemtitle > span {
  margin-right: 2.667vw;
  color: red;
  font-size: 3.6vw;
}

.itemcontent {
  display: flex;
  padding: 2.333vw;
  border-bottom: 1px solid #eee;
}
.itemcontent .itemWenzi {
  flex: 1;
  margin-left: 20px;
  margin-top: 1.333vw;
}
.itemWenzi span {
  display: inline-block;
  width: 53.333vw;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* //盒子中内容竖直排列 */
}
.itemPrice {
  display: flex;
  flex-direction: column;
}
.itemPrice .topPrice {
  font-size: 2.867vw;
  font-weight: 600;
}
.itemPrice .bottonNum {
  margin-top: 2.333vw;
  text-align: right;
}

/* 更多操作 */
.Itemoperate {
  display: flex;
  padding: 0 2.667vw;
  justify-content: right;
  background: #fff;
  height: 8vw;
  padding-top: 1.533vw;
}
.Itemoperate .van-button {
  line-height: 8vw;
}
/* 评星 */
.commentRate {
  text-align: center;
  font-size: 3.367vw;
  background: #eee;
  border-radius: 1.333vw;
  line-height: 9vw;
  margin: 0 1.333vw;
}
.van-rate {
  margin-left: 4vw;
  padding-top: 1.533vw;
}
</style>

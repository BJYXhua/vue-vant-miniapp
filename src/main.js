import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/base.css"
// 使用vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import router from '@/router/index'
// 全局注册头部组件
import Header from "@/components/Header.vue";

Vue.component("Header",Header)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  // 使用全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this
  },
}).$mount('#app')

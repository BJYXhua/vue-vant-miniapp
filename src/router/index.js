import Vue from "vue";
import vueRouter from "vue-router";
import Home from "@/views/Home.vue";
import { Toast } from "vant";
const router = new vueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: Home,
      name: "home",
      meta: {
        title: "我的",
        showFooter: true,
      },
    },
    {
      path: "/index",
      component: () => import("@/views/Index.vue"),
      name: "index",
      meta: {
        title: "首页",
        showFooter: true,
        isAuth: true,
      },
    },
    {
      path: "/category",
      name: "category",
      component: () => import("@/views/Category.vue"),
      meta: {
        title: "分类",
        showFooter: true,
        isAuth: true,
      },
    },
    {
      path: "/order",
      component: () => import("@/views/Order.vue"),
      name: "order",
      meta: {
        title: "订单",
        showFooter: true,
        isAuth: true,
      },
    },

    {
      path: "/video/:title/:detail",
      component: () => import("@/views/Video.vue"),
      props($route) {
        return {
          title: $route.params.title,
          detail: $route.params.detail,
        };
      },
      // 跳转页面，隐藏主路由
      meta: {
        title: "视频",
        showFooter: false,
      },
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
      meta: {
        // 跳转页面，隐藏主路由
        title: "登录",
        showFooter: false,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/Register.vue"),
      meta: {
        // 跳转页面，隐藏主路由
        title: "注册",
        showFooter: false,
      },
    },
    {
      path: "/forget",
      name: "Forget",
      component: () => import("@/views/Forget.vue"),
      meta: {
        // 跳转页面，隐藏主路由
        title: "忘记密码",
        showFooter: false,
      },
    },
    // 订单
    {
      path: "/confirmOrder",
      name: "confirmOrder",
      component: () => import("@/views/order/ConfirmOrder.vue"),
      meta: { showFooter: false, title: "提交订单" },
      props($route) {
        return{
          name:$route.query.name,
          address: $route.query.address,
          tel:$route.query.tel
        }
      },
      children: [
        {
          path: "myAddress",
          name: "myAddress",
          meta: { title: "添加地址" },
          component: () => import("@/views/order/children/MyAddress.vue"),
          props($route) {
            return {
              name: $route.query.name,
              tel: $route.query.tel,
              province: $route.query.province,
              city: $route.query.city,
              county: $route.query.county,
              address: $route.query.address,
              addressDetail: $route.query.addressDetail,
              areaCode: $route.query.areaCode,
            };
          },
          children: [
            {
              path: "addAddress",
              name: "addAddress",
              component: () =>
                import("../views/order/children/children/AddAddress.vue"),
            },
            {
              path: "editAddress",
              name: "editAddress",
              component: () =>
                import("../views/order/children/children/EditAddress.vue"),
            },
          ],
        },
      ],
    },
  ],
});

// 解决报错显示是路由重复
const originalPush = vueRouter.prototype.push;
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
//导航守卫
// 前置导航守卫，判断是否登录，登录即可跳转首页订单和分类路由
router.beforeEach((to, from, next) => {
  if (to.name === "index" || to.name === "order" || to.name === "category") {
    if (to.meta.isAuth) {
      if (localStorage.getItem("username")) {
        next();
      } else {
        Toast.fail("登录后即可查看全部！");
        next();
        router.replace("/login");
      }
    } else {
      next();
    }
  } else {
    next();
  }
}),
  // 后置守卫,跳转路由显示每个页面标题
  router.afterEach((to, from) => {
    console.log(to, from);
    document.title = to.meta.title || "Mini商城";
  });

export default router;

Vue.use(vueRouter);

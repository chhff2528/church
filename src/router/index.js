import Vue from "vue";
import Router from "vue-router";
import module from "./module";
import Index from "@views/home/Index";
import $store from "../store";
import Loading from "@views/Loading";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      meta: {
        title: "首页",
        keepAlive: true,
        header: true,
        backgroundColor: "#fff"
      },
      component: Index
    },
    ...module,
    {
      path: "/auth/:url",
      name: "Loading",
      meta: {
        title: " 加载中",
        keepAlive: true,
        footer: false
      },
      component: Loading
    },
    {
      path: "/userlist",
      name: "UserList",
      meta: {
        title: "信息管理",
        keepAlive: false,
        backgroundColor: "#ffffff",
        header: true
      },
      component: () => import("@views/UserList.vue")
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        title: "登陆",
        keepAlive: false,
        backgroundColor: "#ffffff",
        isHeader: false
      },
      component: () => import("@views/Login.vue")
    }
  ]
});

const { back, replace } = router;

router.back = function() {
  this.isBack = true;
  back.call(router);
};
router.replace = function(...args) {
  this.isReplace = true;
  replace.call(router, ...args);
};

// router.beforeEach((to, form, next) => {
//   // const { title, backgroundColor, footer, home, auth } = to.meta;
//   const { title, backgroundColor, footer} = to.meta;
//   // console.log(to.name, form.name);
//   // if (auth === true && !$store.state.app.token) {
//   //   if (form.name === "Login") return;
//   //   return toLogin(true, to.fullPath);
//   // }
//   document.title = title || process.env.VUE_APP_NAME || "church";
//   //判断是否显示底部导航
//   footer === true ? $store.commit("SHOW_FOOTER") : $store.commit("HIDE_FOOTER");

//   //控制悬浮按钮是否显示
//   // home === false ? $store.commit("HIDE_HOME") : $store.commit("SHOW_HOME");
// // 
//   $store.commit("BACKGROUND_COLOR", backgroundColor || "#F5F5F5");

// });

export default router;

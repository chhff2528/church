import Vue from "vue";
import Router from "vue-router";
import module from "./module";
import Index from "@views/home/Index";
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
        isHeader: true,
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
        isHeader: false
      },
      component: Loading
    },
    {
      path: "/reg",
      name: "Reg",
      meta: {
        title: "注册",
        keepAlive: false,
        backgroundColor: "#ffffff",
        isHeader: false
      },
      component: () => import("@views/Reg.vue")
    }
    /* ,
    {
      path: "*",
      name: "NotDefined",
      meta: {
        title: "页面找不到",
        keepAlive: true,
        home: false,
        backgroundColor: "#F4F6FB"
      },
      component: NotDefined
    } */
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



export default router;

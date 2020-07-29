export default [
  {
    path: "/activity",
    // component: () => import("@views/home/index.vue")
  },
  {
    path: "/activity/fuyin",
    name: "GoodsBargain",
    meta: {
      title: "福音",
      keepAlive: false,
      isHeader: true,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/GoodsBargain.vue")
  },
  {
    path: "/activity/everyday",
    name: "GoodsGroup",
    meta: {
      title: "日常证道",
      keepAlive: false,
      isHeader: false,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/GoodsGroup.vue")
  },
  {
    path: "/activity/audio/:id",
    name: "GroupDetails",
    meta: {
      title: "音频播放",
      isHeader: true,
      keepAlive: false
    },
    component: () => import("@views/activity/GroupDetails.vue")
  },
  {
    path: "/activity/video",
    name: "GoodsSeckill",
    meta: {
      title: "视频播放",
      keepAlive: false,
      isHeader: true,
      backgroundColor: "#ffffff"
    },
    component: () => import("@views/activity/GoodsSeckill.vue")
  }
  // ,
  // {
  //   path: "/reg",
  //   name: "Reg",
  //   meta: {
  //     title: "注册",
  //     keepAlive: false,
  //     backgroundColor: "#ffffff"
  //   },
  //   component: () => import("@views/Reg.vue")
  // }
];

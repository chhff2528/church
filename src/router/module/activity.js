export default [
  {
    path: "/activity",
    // component: () => import("@views/home/index.vue")
  },
  {
    path: "/activity/fuyin",
    name: "FuYin",
    meta: {
      title: "福音",
      keepAlive: false,
      isHeader: true,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/FuYin.vue")
  },
  {
    path: "/activity/everyday",
    name: "EveryDay",
    meta: {
      title: "日常证道",
      keepAlive: false,
      isHeader: false,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/EveryDay.vue")
  },
  {
    path: "/activity/:id/:type?",
    name: "PlayDetails",
    meta: {
      title: "详情播放",
      isHeader: true,
      keepAlive: false
    },
    component: () => import("@views/activity/PlayDetails.vue")
  },
  {
    path: "/activity/video",
    name: "Video",
    meta: {
      title: "视频播放",
      keepAlive: false,
      isHeader: true,
      backgroundColor: "#ffffff"
    },
    component: () => import("@views/activity/Video.vue")
  }
];

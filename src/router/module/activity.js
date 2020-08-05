export default [
  {
    path: "/activity"
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
    path: "/activity/Live",
    name: "Live",
    meta: {
      title: "日常证道",
      keepAlive: false,
      isHeader: false,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/Live.vue")
  },
  {
    path: "/activity/:id/:type?",
    name: "PlayDetails",
    meta: {
      title: "详情播放",
      isHeader: true,
      keepAlive: false
    },
    component: () => import("@views/activity/PlayDetails.vue")
  }
];

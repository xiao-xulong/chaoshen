export default [
  {
    path: "/Home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/Home.vue"),
  },
  {
    path: "/WallPaper",
    name: "WallPaper",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/WallPaper.vue"),
  },
  {
    path: "/PicDownload",
    name: "PicDownload",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/PicDownload.vue"),
  },
  {
    path: "/Us",
    name: "Us",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/Us.vue"),
  },
  {
    path: "/Share",
    name: "Share",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/Share.vue"),
  },
  {
    path: "/QPics",
    name: "QPics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/QPics.vue"),
  },
  {
    path: "/xiongThree",
    name: "xiongThree",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/xiongThree.vue"),
  },
  {
    path: "/activePics",
    name: "activePics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../../views/activePics.vue"),
  },
  {
    path: "/activePicsDownload",
    name: "activePicsDownload",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../../views/activePicsDownload.vue"
      ),
  },
];

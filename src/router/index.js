import { createRouter, createWebHashHistory } from "vue-router";
import chaoshen from "./routerInfo/routerInfo";
const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  ...chaoshen,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

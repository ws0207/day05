import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/main/main.vue"),
  },
];
// 创建路由
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 导出路由
export default router;

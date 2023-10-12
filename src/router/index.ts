import { createRouter, createWebHistory } from "vue-router";
import { ACCESS_TOKEN, ROLE, MENUS } from "../config/constant";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path === "/login") {
    //在登录页清除存储信息
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(ROLE);
    localStorage.removeItem(MENUS);
  }
  let token = localStorage.getItem(ACCESS_TOKEN);
  //没有token，则重定向到登录页
  if (!token && to.path !== "/login") {
    return "/login";
  }
});

export default router;

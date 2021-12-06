<template>
  <router-view />
</template>

<script>
import { ROLE } from "./config/constant";
import manage from "./router/dynamicRoute";

export default {
  watch: {
    $route: {
      async handler(newVal) {
        console.log("newVal", newVal);
        const role = localStorage.getItem(ROLE);
        if (role && role === "admin") {
          /* 在4.x版本中需手动调用router.replace方法重定向，
          因为动态路由页面刷新时，matched的值为空；
          在3.x版本中，刷新页面添加异步路由，matched有值，不需要再重定向 */
          this.$router.addRoute("Layout", manage);
          /* 在动态路由页面刷新时,matched数组为空 */
          if (!newVal.matched.length && newVal.fullPath === "/manage") {
            await this.$router.replace("/manage");
          }
        }
      },
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
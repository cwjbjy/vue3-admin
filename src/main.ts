import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { has } from "./utils/auth";

const app = createApp(App);

app.directive("has", {
  mounted(el) {
    // 获取页面按钮权限
    const btnPermissionsArr = router.currentRoute.value.meta?.btnPermissions;
    if (btnPermissionsArr && !has(btnPermissionsArr as string[])) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  },
});

app.use(router).mount("#app");
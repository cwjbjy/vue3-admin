import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { has } from "./utils";

const app = createApp(App);

app.directive("has", {
  mounted(el) {
    // 获取页面按钮权限
    const btnPermissionsArr = router.currentRoute._value.meta.btnPermissions;
    if (!has(btnPermissionsArr)) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  },
});

app.use(router).mount("#app");

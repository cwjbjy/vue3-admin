<template>
  <div style="height: 170px; margin-top: 60px; text-align: center">
    XXXX管理系统
  </div>
  <div style="text-align: center">
    姓名：<input v-model="user.name" />
    <br />
    密码：<input v-model="user.password" />
    <br />
    <button @click="sumbit">提交</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import API from "../service/api";
import { ACCESS_TOKEN, ROLE, MENUS } from "../config/constant";
import manageRoute from "../router/dynamicRoute";

export default {
  setup() {
    const router = useRouter();
    const user = reactive({ name: "", password: "" });
    const sumbit = () => {
      API.getLogin(user).then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        localStorage.setItem(ROLE, res.data.role);
        localStorage.setItem(MENUS, JSON.stringify(res.data.menus));
        if (res.data.role === "admin") {
          router.addRoute("Layout", manageRoute);
        }
        router.push("/home");
      });
    };
    return { user, sumbit };
  },
};
</script>
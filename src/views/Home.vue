<template>
  <div class="home">
    Home页面
    <button @click="sumbit">提交</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import API from "../service/api";
export default {
    setup() {
    const user = reactive({ name: "", password: "" });
    const sumbit = () => {
      console.log(user);
      API.getData('/getData')
    };
    return { user, sumbit };
  },
}
</script>
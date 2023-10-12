<template>
  <div class="home">
    Home页面

    <button @click="sumbit">提交</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { getData } from "../apis";

const user = reactive({ name: "", password: "" });

const sumbit = () => {
  console.log(user);

  getData();
};
</script>

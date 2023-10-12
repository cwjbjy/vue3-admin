<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ROLE } from './config/constant';
import manage from './router/dynamicRoute';

const router = useRouter();
const route = useRoute();

watch(route, async (newVal) => {
  const role = localStorage.getItem(ROLE);
  if (role && role === 'admin') {
    router.addRoute('Layout', manage);
    /* 在动态路由页面刷新时,matched数组为空 */
    if (!newVal.matched.length && newVal.fullPath === '/manage') {
      await router.replace('/manage');
    }
  }
});
</script>

<style>
body {
  margin: 0;
}
</style>
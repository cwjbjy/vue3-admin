<template>
  <div id="home">
    <header>
      <button style="float: right" @click="exit">退出</button>
    </header>
    <main>
      <aside>
        <ul style="list-style: none">
          <li v-for="(item,index) in newMenus" :key="index">
              <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </aside>
      <article>
        <router-view />
      </article>
    </main>
  </div>
</template>

<script>
import menus from "./config/menus";
import { MENUS } from "./config/constant";
export default {
  data() {
    return {
        newMenus:[]
    };
  },
  created() {
    const menuKeys = JSON.parse(localStorage.getItem(MENUS));
    menus.forEach((item) => {
      if (item.key && menuKeys.includes(item.key)) this.newMenus.push(item);
    });
  },
  methods: {
    exit() {
      this.$router.push("/login");
      //清除动态路由缓存
      location.reload();
    },
  },
};
</script>

<style>
#home {
  height: 100vh;
}
header {
  background: #f4f4f5;
  height: 70px;
}
main {
  display: flex;
  height: 100%;
}
aside {
  width: 150px;
  background: gray;
  height: 100%;
}
article {
  flex: 1;
}
</style>
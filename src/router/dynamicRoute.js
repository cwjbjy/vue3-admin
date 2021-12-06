//动态路由
const manage = {
    path: "/manage",
    name: "manage",
    component: () => 
    import(/* webpackChunkName:"manage" */ "../views/Manage.vue"),
  };
  
  export default manage
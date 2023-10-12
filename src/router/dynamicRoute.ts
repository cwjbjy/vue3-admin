//动态路由
const manage = {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/Manage.vue'),
  };
  
  export default manage;
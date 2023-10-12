//配置路由
const Login = () => import('../pages/Login.vue');
const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');
const Layout = () => import('../Layout.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        //存放按钮权限信息
        meta: {
          btnPermissions: ['admin', 'visitor'],
        },
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          btnPermissions: ['admin'],
        },
      },
    ],
  },
];

export default routes;
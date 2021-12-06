//配置路由
const Login = () =>
  import(/* webpackChunkName: "login" */ "../views/Login.vue");
const Home = () => 
  import(/* webpackChunkName: "home" */ "../views/Home.vue");
const About = () => 
  import(/* webpackChunkName: "about"*/ "../views/About.vue")
const Layout = () =>
  import(/* webpackChunkName: "layout" */ "../Layout.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        //存放按钮权限信息
        meta: {
            btnPermissions: ['admin', 'visitor']
        },
      },
      {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            btnPermissions: ['admin']
        },
      },
    ],
  },
];

export default routes;
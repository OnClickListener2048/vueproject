import {
  createRouter,
  createWebHistory,
  type NavigationGuardWithThis
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import { GlobalConfig } from "@/stores/counter";
import router_path from "@/router/router_path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: router_path.home
    },
    {
      path: router_path.home,
      name: "home",
      component: () => import("../views/HomeView.vue"),
      redirect:router_path.homeIndex,
      children:[]
    },
    {
      path: router_path.login,
      name: "login",
      component: () => import("../views/login_form.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    }
  ]
});

router.beforeEach((to, from) => {
  const globalState = GlobalConfig();
  if (!globalState.token && to.name != "login") {
    console.log(router_path.login);
    return router_path.login;
  }
  // ...
  // 返回 false 以取消导航
  return true;
});

router.onError((error, to, from) => {
  console.warn("路由错误", error, to, from);

});

export default router;

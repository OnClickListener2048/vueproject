import {
  createRouter,
  createWebHistory,
  type NavigationGuardWithThis, useRouter
} from "vue-router";
import HomeView from "../views/layout/HomeView.vue";
import { GlobalConfig } from "@/stores/counter";
import router_path from "@/router/router_path";
import { auth_list } from "@/stores/auth_list";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: router_path.home
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/layout/HomeView.vue"),
      // redirect:router_path.home,
      children: []
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

router.beforeEach(async (to, from) => {
  console.log(to);
  console.log(router.getRoutes());
  const globalState = GlobalConfig();
  if (!globalState.token && to.name != "login") {
    console.log(router_path.login);
    return router_path.login;
  }


  let authList = auth_list();
  if (authList.computedRef.list.length == 0) {
    await authList.getMenuList();
    await router.push(to)
    return false;
  }

  // ...
  // 返回 false 以取消导航
  return true;
});

router.onError((error, to, from) => {
  console.warn("路由错误", error, to, from);

});

export default router;

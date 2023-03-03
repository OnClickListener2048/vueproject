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
      path: "/layout",
      name: "layout",
      component: () => import("../views/layout/HomeView.vue"),
      redirect:router_path.homeIndex,
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

router.beforeEach(async (to, from, next) => {
  const globalState = GlobalConfig();


  if (to.path === router_path.login) {
    if (globalState.token) return from.fullPath;
    return next();
  }

  if (!globalState.token) {
    return next({ path: router_path.login, replace: true });
  }


  let authList = auth_list();
  if (authList.computedRef.list.length == 0) {
    await authList.getMenuList();
    return next({ ...to, replace: true });
  }

  // ...
  // 返回 false 以取消导航
  next();
});

router.onError((error, to, from) => {
  console.warn("路由错误", error, to, from);

});

export default router;

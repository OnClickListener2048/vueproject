import {
  createRouter,
  createWebHistory,
  type NavigationGuardWithThis,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import { GlobalConfig } from "@/stores/counter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login_form.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const globalState = GlobalConfig();
  if (!globalState.token && to.name != "login") {
    console.log("/login")
    return "/login";
  }
  // ...
  // 返回 false 以取消导航
  return true;
});

export default router;

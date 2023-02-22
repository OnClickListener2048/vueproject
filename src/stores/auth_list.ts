import { defineStore } from "pinia";
import http from "@/api/http";
import { computed, onMounted, reactive } from "vue";
import type { AuthItem } from "@/interface";
import { filterMenuList, getFlatMenuList } from "@/router/router_path";
import router from "@/router";

let glob = import.meta.glob("../views/**/**.vue");
export const auth_list = defineStore(
  "auth_list",
  () => {
    let authList = reactive({ "list": [] as AuthItem[], "defaultOpen": "0" });
    let computedRef = computed(() => authList);

    async function getMenuList() {
      let { data } = await http.get<AuthItem[]>("/menu/list");
      console.log(data);
      authList.list = data ?? [];

      let flatMenuList = getFlatMenuList(authList.list);
      console.log(flatMenuList);

      let flatItems = filterMenuList(flatMenuList);
      console.log(flatItems);
      for (const flatItem of flatItems) {
        let route = {
          path: flatItem.path ?? "",
          component: glob[`../views${flatItem.component}.vue`]
        };
        flatItem.component = glob[`../views${flatItem.component}.vue`];
        if (flatItem.meta?.isFull) {
          let addRoute = router.addRoute(flatItem as any);
        } else {
          let addRoute1 = router.addRoute("home", flatItem as any);
        }
        authList.defaultOpen = "1";
      }

      console.log(router.getRoutes());
    }


    return { computedRef, getMenuList };
  }
);

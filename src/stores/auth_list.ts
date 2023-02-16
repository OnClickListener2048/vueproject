import { defineStore } from "pinia";
import http from "@/api/http";
import { computed, onMounted, reactive } from "vue";
import type { AuthItem } from "@/interface";
import { getFlatMenuList } from "@/router/router_path";
import router from "@/router";

let glob = import.meta.glob("../views/**/**.vue");
export const auth_list = defineStore(
  "auth_list",
  () => {
    let authList = reactive({ "list": [] as AuthItem[] });
    let computedRef = computed(() => authList);

    async function getMenuList() {
      let { data } = await http.get<AuthItem[]>("/menu/list");
      console.log(data);
      authList.list = data ?? [];

      let flatItems = getFlatMenuList(authList.list);
      for (const flatItem of flatItems) {
        let route = {
          path: flatItem.path ?? "",
          component: glob[`../views${flatItem.component}.vue`],
        };

        if (flatItem.meta?.isFull) {
          let addRoute = router.addRoute(route);
          console.log(addRoute);
        } else {
          let addRoute1 = router.addRoute("home", route);
          console.log(addRoute1);
        }
        console.log(route);
      }
    }


    return { computedRef, getMenuList };
  }
);

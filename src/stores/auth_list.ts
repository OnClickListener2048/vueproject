import { defineStore } from "pinia";
import http from "@/api/http";
import { computed, reactive } from "vue";
import type { AuthItem } from "@/interface";

export const auth_list = defineStore(
  "auth_list",
  () => {

    let authList = reactive({"list":[] as AuthItem[]});
    let computedRef = computed(() => authList);

    async function getMenuList() {
      let { data } = await http.get<AuthItem[]>("/menu/list");
      console.log(data);
      authList.list = data ?? [];
    }

    return { computedRef, getMenuList };
  }
);

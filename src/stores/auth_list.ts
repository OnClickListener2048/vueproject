import { defineStore } from "pinia";
import http from "@/api/http";
import type { Menu } from "@/interface";

export const auth_list = defineStore(
  "auth_list",
  () => {

    let authList = [] as Menu.AuthItem[] | undefined;

    async function getMenuList() {
      let { data } = await http.get<Menu.AuthItem[] | undefined>("/menu/list");
      console.log(data);
      authList = data;


    }

    return { authList };
  }
);

export const auth_list2 = () => {
  return defineStore({
    id: "auth_list",
    state: () => ({}),
    getters: {},
    actions: {
      async getMenuList() {
        let { data } = await http.get("/menu/list");
        console.log(data);
      }
    }
  });
};
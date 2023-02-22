import type { AuthItem } from "@/interface";

let router_path = {
  login: "/login",
  home: "/home",
  homeIndex: "/home/index"
};


export function getFlatMenuList(items: AuthItem[]) {
  const getFlatItems = (list: AuthItem[]): AuthItem[] => {
    return list.reduce<AuthItem[]>((previousValue, currentValue) => {
      return previousValue.concat([currentValue, ...getFlatItems(currentValue.children ?? [])]);
    }, []);
  };
  return getFlatItems(items);
}

export function filterMenuList(items: AuthItem[]) {
  return items.filter((value) => {
    value.children = filterMenuList(value.children ?? []);
    return !value.meta?.isHide;
  });
}

export default router_path;

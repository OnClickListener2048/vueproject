<template>
  <template v-for="(item) in items">
    <el-sub-menu v-if="item.children && item.children.length>0" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <HomeSubItem v-bind:items="item.children" />
    </el-sub-menu>
    <el-menu-item v-else v-bind:index="item.path" @click="handleItemClick(item)">
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      <template #title slot="title">

        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import type { AuthItem } from "@/interface";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import router_path from "@/router/router_path";

let props = withDefaults(
  defineProps<{
    items: AuthItem[] | undefined,
  }>(),
  {
    items: () => [] as AuthItem[]
  }
);
let router = useRouter();
const handleItemClick = (item: AuthItem) => {
  console.log(`handleItemClick---${item}`);
  if (item.meta?.isLink) {

  }
  router.push(item.path ?? router_path.homeIndex);
};

</script>

<style scoped>

</style>
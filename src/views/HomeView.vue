<template>
  <div class="common-layout">
    <el-container class="el-container" style="height: 55px">
      <el-header class="el-header">
        <div class="top">
          <img class="logo" src="../assets/logo.svg" alt="logo" @click="handleCollapse">
          <span>vue project</span>
        </div>
      </el-header>

    </el-container>
    <el-container>
      <div v-bind:style="{width:isCollapse?'64px':'200px'}" style="background-color: aqua"
           class="el-menu-vertical-demo">
        <el-aside class="el-menu-vertical-demo">
          <el-scrollbar>
            <el-menu :collapse="isCollapse"
                     :default-active="activeMenu"
                     unique-opened="unique-opened">
              <HomeSubItem v-bind:items="list"></HomeSubItem>
            </el-menu>
          </el-scrollbar>
        </el-aside>
      </div>
      <el-container>
        <router-view v-slot="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
        <el-footer>
          footer
        </el-footer>
      </el-container>
    </el-container>
  </div>


</template>

<script setup lang="ts">
import { auth_list } from "@/stores/auth_list";
import HomeSubItem from "@/views/HomeSubItem.vue";
import { computed, onMounted, ref, toRefs } from "vue";
import type { AuthItem } from "@/interface";
import { useRoute } from "vue-router";
let route = useRoute();


setTimeout(()=>{
  console.log(route);
},1000)
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
let storeDefinition = auth_list();

let { list, defaultOpen } = toRefs(storeDefinition.computedRef);

let handleOpen = function(path:string) {
  console.log(`handleOpen---${path}`);
};
let handleClose=function(path: string) {
  console.log(`handleClose---${path}`);
};
let isCollapse = ref(false);

let handleCollapse = function() {
  isCollapse.value = !isCollapse.value;
};


</script>

<style lang="scss">

.el-footer {
  background-color: cadetblue;
}

.el-main {
  background-color: aqua;
}

.el-header {
  flex-direction: column;
  justify-content: center;
  background-color: black;
  display: flex;

  div {
    display: flex;
  }

  .logo {
    margin-right: 10px;
    width: 30px;
  }

  span {
    font-size: 20px;
    color: white;
  }
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: calc(100% - 55px);
  width: 200px;
  min-height: 400px;
}
</style>



<template>
  <div class="common-layout">
    <el-container class="el-container-top">
      <el-header class="el-header">
        <div class="top" >
          <img class="logo" id="toolbar-logo" src="../../assets/logo.svg" alt="logo" @click="handleCollapse">
          <span>vue project</span>
        </div>
      </el-header>

    </el-container>
    <el-container >
      <div  class="bottom-height">
        <el-aside class="el-menu-vertical-demo" v-bind:style="{width:isCollapse?'64px':'200px'}">
          <el-scrollbar :height="windowHeight">
            <el-menu :collapse="isCollapse"
                     :default-active="activeMenu"
                     unique-opened="unique-opened">
              <HomeSubItem v-bind:items="list"></HomeSubItem>
            </el-menu>
          </el-scrollbar>
        </el-aside>
      </div>
      <el-container >
        <router-view  v-slot="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
        <el-footer height="30px">
          <div>
            footer
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>


</template>

<script setup lang="ts">
import { auth_list } from "@/stores/auth_list";
import HomeSubItem from "@/views/HomeSubItem.vue";
import { computed, ref, toRefs } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
console.log("layoutClassic");
console.log(route);

const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
let storeDefinition = auth_list();
let { list } = toRefs(storeDefinition.computedRef);

let isCollapse = ref(false);

let handleCollapse = function() {
  isCollapse.value = !isCollapse.value;
};
let windowHeight = window.innerHeight - 60

</script>


<style lang="scss" scoped>

.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
}

.el-main {
  background-color: aqua;
}

.router {
  height: 100%;
}

.el-header {
  flex-direction: column;
  justify-content: center;
  background-color: saddlebrown;

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
.el-container-top{
  height: 60px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
</style>



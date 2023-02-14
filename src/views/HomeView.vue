<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-header class="el-header">
        <div class="top">
          <img class="logo" src="../assets/logo.svg" alt="logo" @click="handleCollapse">
          <span>vue project</span>
        </div>
      </el-header>

    </el-container>
    <el-container>
      <div v-bind:style="{width:isCollapse?'64px':'200px'}">
        <el-aside class="el-menu-vertical-demo">
          <el-scrollbar>
            <el-menu :collapse="isCollapse" @open="handleOpen" @close="handleClose" default-active="0"
                     unique-opened="unique-opened">
              <HomeSubItem v-bind:items="computedRef.list"></HomeSubItem>
            </el-menu>
          </el-scrollbar>
        </el-aside>
      </div>
      <el-container>
        <el-main>
          main
        </el-main>
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
import { ref } from "vue";

let storeDefinition = auth_list();
storeDefinition.getMenuList();
let computedRef = storeDefinition.computedRef;

let handleOpen = function() {

};
let handleClose;
let isCollapse = ref(false);

let handleCollapse = function() {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss">

.el-footer {
  background-color: darkblue;
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



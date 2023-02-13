<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-header class="el-header">
        <div class="top">
          <img class="logo" src="../assets/logo.svg" alt="logo">
          <span>vue project</span>
        </div>
      </el-header>

    </el-container>
    <el-container>
      <el-aside class="el-aside">
        <el-menu :collapse="isCollapse" @open="handleOpen" @close="handleClose">

        </el-menu>
      </el-aside>
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
import { auth_list, auth_list2 } from "@/stores/auth_list";

let storeDefinition = auth_list();
// storeDefinition.getMenuList();


let storeDefinition1 = auth_list2();
storeDefinition1().getMenuList()
let handleOpen = function() {

};
let handleClose;
let isCollapse;
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

.el-aside {
  width: 200px;
  height: 100%;
  background-color: cadetblue;
}
</style>



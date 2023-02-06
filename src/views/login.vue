<template>
  <div class="login-container">
    <div class="login-background">
      <el-switch v-model="open" class="switcher"></el-switch>
      <div class="login-left">
        <img src="../assets/login_left0.png" alt="登录背景" />
      </div>
      <div class="login-right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
var open = ref(true);
</script>

<style scoped>
.switcher {
  top: 5%;
  right: 5%;
  position: absolute;
}
.login-left {
  width: 800px;
}
.login-container {
  background-image: url("../assets/login_bg.svg");
  position: relative;
  min-width: 550px;
  height: 100%;
  align-content: center;
  min-height: 500px;
  background-color: #eeeeee;
  background-position: 50%;
  background-size: cover;
}
img {
  width: 100%;
  height: 100%;
}
.login-right {
  margin: 50px;
  width: 420px;
  padding: 50px 40px 45px;
  border-radius: 10px;
  box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
}
.login-background {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 96%;
  height: 94%;
  padding: 0 50px;
  background-color: hsl(0deg 0% 100% / 80%);
  border-radius: 10px;
}
</style>

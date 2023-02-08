<template>
  <div class="login-container">
    <div class="login-background">
      <el-switch v-model="open" class="switcher"></el-switch>
      <div class="login-left">
        <img src="../assets/login_left0.png" alt="登录背景" />
      </div>
      <div class="login-right">
        <img src="../assets/logo.svg" alt="">
        <h1>VUE PRACTICE</h1>
        <el-form :inline="false" :rules="loginRules" ref="ruleFormRef" :model="loginData">
          <el-form-item prop="userName">
            <el-input class="userName" v-model="loginData.userName" placeholder="请输入用户名" size="default" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="password" type="password" v-model="loginData.password" size="default" placeholder="请输入密码"
              show-password autocomplete="new-password" />
          </el-form-item>

          <div class="login-button">
            <el-button round size="large" style="width: 100%;">
              清空
            </el-Button>
            <el-button round type="primary" size="large" @click="submitForm(ruleFormRef)">
              登录
            </el-Button>
          </div>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules, FormInstance } from "element-plus";
import { ref, reactive } from "vue";

const ruleFormRef = ref<FormInstance>()

var open = ref(true);
var loginData = reactive({
  userName: "",
  password: "",
})

var loginRules = reactive<FormRules>({
  userName: [{ trigger: "blur", required: true, message: "必须输入用户名！" }],
  password: [{ trigger: "blur", required: true, message: "必须输入密码！" }]
})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped>
.userName {
  width: 100%;
}

.login-button {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;

}

.el-button {
  width: 185px;
}

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

@media screen and (max-width: 1100px) {
  .login-left {
    display: none;
  }
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

.login-right img {
  height: 100px;
  width: 100px;
}

.login-right h1 {
  float: right;
  font-size: 40px;
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

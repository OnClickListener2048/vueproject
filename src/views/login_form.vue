<template>
  <div class="login-container">
    <div class="login-background">
      <el-switch v-model="open" class="switcher"></el-switch>
      <div class="login-left">
        <img src="../assets/login_left0.png" alt="登录背景" />
      </div>
      <div class="login-right">
        <div class="login-top">
          <img src="../assets/logo.svg" alt="">
          <h2>VUE PRACTICE</h2>
        </div>
        <el-form :inline="false" :rules="loginRules" ref="ruleFormRef" :model="loginData">
          <el-form-item prop="userName">
            <el-input class="userName" v-model="loginData.username" placeholder="请输入用户名" size="default" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="password" type="password" v-model="loginData.password" size="default" placeholder="请输入密码"
                      show-password autocomplete="new-password" />
          </el-form-item>

          <div class="login-button">
            <el-button round size="large" @click="clearData(ruleFormRef)">
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
import http from "@/api/http";
import { Md5 } from "ts-md5";
import router_path from "@/router/router_path";
import router from "@/router";
import { GlobalConfig } from "@/stores/counter";


const ruleFormRef = ref<FormInstance>();

const open = ref(true);
const loginData = reactive({
  username: "",
  password: ""
});

const loginRules = reactive<FormRules>({
  username: [{ trigger: "blur", required: true, message: "必须输入用户名！" }],
  password: [{ trigger: "blur", required: true, message: "必须输入密码！" }]
});


const clearData = (formEl: FormInstance) => {
  console.log(formEl);
  if (formEl) {
    formEl.resetFields();
  }

};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  let b = await formEl.validate(async (valid, fields) => {
    if (valid) {
      console.log("submit!");
      const { data } = await http.post<{ access_token: string }>(router_path.login, {
        ...loginData,
        password: Md5.hashStr(loginData.password)
      });

      let globalConfig = GlobalConfig();
      if (data) {
        globalConfig.setToken(data.access_token);
      }

      let newVar = await router.push(router_path.home);
      console.log(newVar);
    } else {
      console.log("error submit!", fields);
    }
  });
  console.log(b);

};
</script>

<style scoped>

.login-top {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}


h2 {
  background-color: cadetblue;
}


.userName {
  width: 100%;
}

.login-button {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;

}

.login-button .el-button {
  width: 200px;
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

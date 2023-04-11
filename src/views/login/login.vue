<template>
  <div>
    <div class="login">
      <el-row class="bg-indigo-500 min-h-screen">
        <el-col :lg="16" :md="12" :sm="24" class="left">欢迎光临 </el-col>
        <el-col :lg="8" :md="12" :sm="24" class="right">
          <h2 class="title">欢迎回来</h2>
          <div class="list">
            <span class="line"></span>
            <span>账号密码登录</span>
            <span class="line"></span>
          </div>
          <el-form ref="loginFormRef" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input
                v-model.trim="form.username"
                placeholder="请输入用户名"
                :prefix-icon="Avatar"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model.trim="form.password"
                placeholder="请输入密码"
                :prefix-icon="Lock"
              />
            </el-form-item>

            <el-form-item>
              <el-button
                round
                class="login1"
                type="primary"
                @click="onSubmit(loginFormRef)"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Avatar, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const loginFormRef = ref<FormInstance>();

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const rules = reactive<FormRules>({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 3, max: 5, message: "请输入3-5个字符", trigger: "blur" },
  ],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});

const onSubmit = (formName: FormInstance | undefined) => {
  if (!formName) return;
  formName.validate((valid) => {
    console.log("valid=>", valid);
  });
};
</script>
<style>
.left {
  @apply flex justify-center items-center text-light-50;
}
.right {
  @apply bg-light-50 flex justify-center items-center flex-col;
}
.title {
  @apply font-bold text-3xl text-gray-800;
}
.list {
  @apply text-gray-300 my-5 flex justify-center items-center space-x-2;
}
.line {
  @apply h-[1px] bg-gray-300 w-16;
}
.login1 {
  @apply w-[250px];
}
</style>

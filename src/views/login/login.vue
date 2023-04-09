<template>
  <div>
    <div class="login">
      <div class="left">欢迎光临</div>
      <div class="right">
        <el-form label-width="100px" :model="user" style="max-width: 460px">
          <el-form-item label="用户名">
            <el-input v-model="user.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="user.pass" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";

const user = reactive({
  name: "",
  pass: "",
});
const login = () => {
  console.log("登陆成功");
};
</script>
<style>
.login {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login .left {
  width: 70%;
  height: 753px;
  background: blue;
  line-height: 753px;
  text-align: center;
  color: #fff;
}
.login .right {
  width: 30%;
}
</style>

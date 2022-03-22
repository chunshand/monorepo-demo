<script setup lang="ts">
import { ref } from "vue"
import { CreateUserDto } from "@monorepo-demo/serve/src/user.dto"
let create_user_data: CreateUserDto = {
  username: "test-username",
  password: "test-password",
}
const res_data_str = ref('');
const handleCreateUser = async () => {
  try {
    let res = await fetch('/user/create', {
      method: 'post',
      body: JSON.stringify(create_user_data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let json_parse = await res.json();
    console.log(json_parse);
    res_data_str.value = JSON.stringify(json_parse)

  } catch (error) {

  }


}
</script>

<template>
  <button @click="handleCreateUser">post请求</button>
  <div>
    <p>请求参数:</p>
    <pre>
      {{ create_user_data }}
    </pre>
    <p>返回结果：</p>
    <pre>
    {{ res_data_str }}
    </pre>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

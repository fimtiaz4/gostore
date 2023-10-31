<script setup>
import { ref } from "vue";
import { authStore } from "../store/store";

import router from "../router/index";

const name = ref("fahim3");
const email = ref("fahim@gmail3.com");
const password = ref("123456");
</script>
<template>
  <div class="col-md-8 mb-5 p-4 p-md-2">
    <h3 class="text-uppercase fw-bolder py-2">Sign up for new account</h3>

    <div class="w-lg-50">
      <label class="form-label">name</label>
      <input type="text" v-model="name" class="form-control box-shadow-none rounded-0" />
      <label class="form-label">email</label>
      <input type="email" v-model="email" class="form-control box-shadow-none rounded-0" />
      <label class="mt-3 form-label">Password</label>
      <input v-model="password" type="password" name="password" id="password" class="form-control box-shadow-none rounded-0" />

      <!-- <button @click="auth.authenticate(username, password)" class="mt-3 btn rounded-0 box-shadow-none btn-success">Login</button> -->
      <button @click="authStore.register(name, email, password)" class="mt-3 btn rounded-0 box-shadow-none btn-success">
        <span>Sign up</span>
      </button>
    </div>
  </div>
</template>

<style></style>

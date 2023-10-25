//create home component
<script setup>
import { ref } from "vue";
import { authStore } from "../store/store";
const auth = authStore;

import router from "../router/index";

const username = ref("fahim@gmail.com");
const password = ref("123456");
</script>
<template>
  <div class="col-md-8 mb-5 p-4 p-md-2">
    <h3 class="text-uppercase fw-bolder py-2">Log in to your account</h3>

    <div class="w-lg-50">
      <label class="form-label">Email</label>
      <input type="email" v-model="username" class="form-control box-shadow-none rounded-0" />
      <label class="mt-3 form-label">Password</label>
      <input v-model="password" type="password" name="password" id="password" class="form-control box-shadow-none rounded-0" />

      <!-- <button @click="auth.authenticate(username, password)" class="mt-3 btn rounded-0 box-shadow-none btn-success">Login</button> -->
      <button @click="auth.authenticate(username, password)" class="mt-3 btn rounded-0 box-shadow-none btn-success">
        <span>Login</span>
      </button>

      <router-link class="mt-3 btn rounded-0 box-shadow-none btn-dark mx-3" to="/register"> <span>Register</span></router-link>
    </div>
  </div>
</template>

<style></style>

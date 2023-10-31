<script setup>
import Header from "../components/Header.vue";
import { ref } from "vue";
import { authStore } from "../store/store";

import router from "../router/index";

const name = ref("");
const email = ref("");
const password = ref("");
</script>

<template>
  <Header />
  <main class="p-top-6rem p-md-top-10rem">
    <section class="bg-light">
      <div class="container-lg py-2 pt-4 my-auto">
        <h3 class="text-uppercase fw-bold mb-0">shop page</h3>
        <nav style="--bs-breadcrumb-divider: '>'">
          <ol class="breadcrumb text-capitalize small">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none">Login page</router-link>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <!-- === product-item body ===  -->
    <section id="shopBody">
      <div class="container-lg mb-5">
        <div class="row">
          <div class="" id="products">
            <div class="row justify-content-center gap-2 gap-sm-0 pb-4">
              <div class="col-8 col-sm-4 col-md-12 p-0">
                <div class="col-md-8 mb-5 p-4 p-md-2">
                  <h3 class="text-uppercase fw-bolder py-2">Sign up for new account</h3>

                  <div class="w-lg-50">
                    <label class="form-label mt-3">Name</label>
                    <input type="text" v-model="name" class="form-control box-shadow-none rounded-0" />
                    <label class="form-label mt-3">Email</label>
                    <input type="email" v-model="email" class="form-control box-shadow-none rounded-0" />
                    <label class="mt-3 form-label">Password</label>
                    <input v-model="password" type="password" name="password" id="password" class="form-control box-shadow-none rounded-0" />

                    <!-- <button @click="auth.authenticate(username, password)" class="mt-3 btn rounded-0 box-shadow-none btn-success">Login</button> -->
                    <button @click="authStore.register(name, email, password)" class="mt-3 btn rounded-0 box-shadow-none btn-success">
                      <span>Sign up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--===== Product-Items-area =====-->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.accordion-toggle-open {
  display: none;
}

.collapsed .accordion-toggle-open {
  display: block;
}

.collapsed .accordion-toggle-close {
  display: none;
}

.accordion-toggle-close {
  display: block;
}
</style>

<script setup>
import Header from "../components/Header.vue";
import productItems from "../components/product-items.vue";

import login from "../components/login.vue";
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
                <login />
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

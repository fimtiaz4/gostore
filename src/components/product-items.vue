<script setup>
import { ref, reactive, watchEffect } from "vue";
import { cart } from "../store/cart";
import { productArr } from "../store/data";
import { filter } from "../store/filter";

const page = ref(1);
const pageInc = () => {
  page.value++;
};
const pageDec = () => {
  page.value--;
};
const products = productArr.dat().products;
const pagesa = products.links;
</script>

<template>
  <div class="col-12 col-lg-9 px-3" id="products">
    <div class="row justify-content-center gap-2 gap-sm-0 pb-4">
      <div v-for="products in products.data" :key="products.id" class="col-8 col-sm-4 col-md-3 p-0 products-item">
        <div class="card rounded-0 group-hover p-2 h-100">
          <div class="overflow-hidden position-relative">
            <img class="" :src="products.image" />
            <div class="card-img-overlay rounded-0 d-flex p-0 bg-opacity-0 justify-content-end align-items-end bg-dark hover-bg-opacity-10 transition-1000">
              <div class="btn-group-vertical transform-rotateY-90 hover-transform-rotateY-0 transition-500"></div>
            </div>
            <router-link class="stretched-link" :to="{ name: 'product', params: { id: products.id } }"> </router-link>
          </div>
          <div class="card-body text-capitalize small px-0">
            <p class="mb-1">{{ products.title }}</p>
            <div class="small py-1">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="far fa-star text-warning"></i>
              <span class="text-secondary">({{ products.rating_count }})</span>
            </div>
          </div>
          <div class="card-footer border-0 bg-transparent h-6 overflow-hidden p-0">
            <div class="hover-mt-n25 transition-500 small">
              <p class="mt-2">${{ products.price }}</p>
              <div class="text-uppercase small cursor-pointer">
                <a href="#" @click.stop.prevent="cart.addItem(products)" class="text-decoration-none text-dark fw-bold">add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <p class="mb-2" v-if="products.next_page_url == null">You have viewed all products</p>
      <p class="mb-2" v-if="products.next_page_url != null">You have viewed {{ products.current_page * 10 }} of {{ products.total }} products</p>

      <!-- <button class="mx-2 fw-bold text-white bg-dark hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none" type="button" v-if="1 !== products.current_page" @click="pageDec">Prev</button> -->
      <!-- {{ pages }} -->
      <div class="first-last d-inline">
        <button
          class="mx-2 fw-bold text-white bg-dark hover-border-red hover-text-red hover-bg-transparent btn rounded-0 box-shadow-none"
          type="button"
          v-for="link in products.links"
          :class="{
            'd-none': link.url == null,
            textred: products.current_page == link.label,
          }"
          @click="filter = link.url"
        >
          <span v-html="link.label"></span>
        </button>
      </div>
      <!-- :class="products.current_page == link.label ? 'textred' : ''" -->
      <!-- <button class="mx-2 fw-bold text-white bg-dark hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none" type="button" v-if="products.next_page_url !== null" @click="filter = links.url">Next</button> -->

      <!-- {{ products.links[0] }} -->
    </div>
  </div>
</template>

<style scoped>
.textred {
  color: red !important;
  background: transparent !important;
  border: 1px solid red;
}
</style>

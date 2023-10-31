<script setup>
import { ref, watch, reactive } from "vue";
import Header from "../components/Header.vue";
import productItems from "../components/product-items.vue";
import { filters } from "../store/filter";
import { sortKeyLTH, sortKeyHTL, productsUrl, baseUrl, removeParametersFromURL } from "../store/data";
import Slider from "primevue/slider";
const rangeS = 0;
const rangeD = 1000;
const rangeValues = ref([rangeS, rangeD]);
const currentURL = productsUrl.value;
watch(rangeValues, (newRangeValues) => {
  const updatedURL = `${removeParametersFromURL(currentURL, ["page"])}${productsUrl.value.includes("?") ? "&" : "?"}min=${rangeValues.value[0]}${productsUrl.value.includes("?") ? "&" : "?"}max=${rangeValues.value[1]}`;
  productsUrl.value = updatedURL;
});

const selectedSortKey = ref("default");
watch(selectedSortKey, (newVal) => {
  if (newVal === "price_low_to_high") {
    sortKeyLTH();
  }
  if (newVal === "price_high_to_low") {
    sortKeyHTL();
  }
  if (newVal === "default") {
    productsUrl.value = baseUrl;
  }
});
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
              <router-link to="/" class="text-decoration-none">shop page</router-link>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <!-- === product-item body ===  -->
    <section id="shopBody">
      <div class="container-lg mb-5">
        <div class="row">
          <div class="col-md-3">
            <div class="offcanvas offcanvas-end position-lg-static transform-translate-x-lg-0 visibility-lg-visible border-md-0" style="visibility: hidden" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
              <div class="offcanvas-body">
                <div class="row justify-content-center">
                  <div class="col-12 mb-5 pe-2">
                    <div class="accordion cursor-p" id="accordionPanelsStayOpenExample">
                      <!--====== Accordion-Item collapse button ======-->
                      <label for="customRange1" class="form-label text-uppercase fw-bold mt-1 mb-1">Sort by</label>
                      <select v-model="selectedSortKey" class="form-select box-shadow-none rounded-0 border-0 bg-light" aria-label="Default select example">
                        <option :value="'default'">Default</option>
                        <option :value="'price_low_to_high'">Sort by price: Low to High</option>
                        <option :value="'price_high_to_low'">Sort by price: High to Low</option>
                      </select>
                    </div>
                  </div>
                  <!--== section sort-list ==-->
                  <div class="col-12 d-md-none mb-5 pe-4">
                    <select class="form-select box-shadow-none rounded-0 border-0 bg-light text-capitalize" aria-label="Default select example">
                      <option selected>sort by latest</option>
                      <option value="1">sort by popularity</option>
                      <option value="2">sort by average rating</option>
                      <option value="3">sort by price: low to high</option>
                      <option value="4">sort by price: high to low</option>
                    </select>
                  </div>
                  <!--== section price ==-->
                  <div class="col-12 mb-5 pe-4">
                    <label for="customRange1" class="form-label text-uppercase fw-bold mt-1 mb-1">price</label>

                    <Slider v-model="rangeValues" range :min="rangeS" :max="rangeD" :step="1" />
                    <div class="d-flex justify-content-between input-range mt-4"><input :min="rangeS" type="number" v-model="rangeValues[0]" /> <input type="number" :max="rangeD" v-model="rangeValues[1]" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--===== Product-Items-area =====-->

          <productItems />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.input-range input {
  width: 60px;
  justify-content: space-between;
  display: flex;
}
.p-slider .p-slider-handle {
  background: red !important;
  border: 2px solid red !important;
}
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

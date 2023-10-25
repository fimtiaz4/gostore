<script setup>
// import { useRoute } from "vue-router";
import { useRoute } from "vue-router";
import { ref, reactive, watch, computed, onBeforeMount } from "vue";
const route = useRoute();
import axios from "axios";
import { cart } from "../store/cart";
const id = route.params.id;
import Header from "../components/Header.vue";
// console.log(cart.items[10].quantity);
const product = reactive({});
onBeforeMount(() => {
  axios.get(`https://www.ecom.coderstream.com/api/products/${id}`).then((res) => {
    product.id = res.data.id;
    product.title = res.data.title;
    product.body = res.data.body;
    product.image = res.data.image;
    product.price = res.data.price;
    product.description = res.data.description;
    product.rating_count = res.data.rating_count;
  });
});
// const localQuan = cart.items[id].quantity;

const shopPageQuan = ref(1);
watch(shopPageQuan, (newValue) => {
  if (newValue < 1) {
    shopPageQuan.value = 1;
  }
});
</script>

<template>
  <Header />
  <section id="product-Details-Product my-5" style="margin-top: 11rem">
    <div class="container-lg">
      <div class="row py-5">
        <div class="col-md-6">
          <div id="productDetailsImageSlider" class="carousel slide" data-bs-ride="carousel">
            <div class="position-static m-2">
              <button type="button" data-bs-target="#productDetailsImageSlider" data-bs-slide-to="4" class="w-100 h-auto border">
                <img :src="product.image" class="d-block h-100 w-100" alt="image" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="small">
            <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="far fa-star text-warning"></i><span class="text-secondary">({{ product.rating_count }})</span>
          </div>
          <h3 class="text-capitalize fw-bold my-3">{{ product.title }}</h3>
          <p class="h4 my-3">${{ product.price }}</p>
          <div class="py-4 border-bottom">
            <div class="btn-toolbar gap-2 btn-sm">
              <div class="btn-group w-100 w-sm-auto"><button class="btn rounded-0 box-shadow-none btn-success" @click="shopPageQuan--">-</button><input type="number" v-model="shopPageQuan" class="form-controle form-control-sm border rounded-0 outline-0 text-center" style="max-width: 3rem" /><button class="btn rounded-0 box-shadow-none btn-success" @click="shopPageQuan++">+</button></div>
              <a
                href=""
                @click.stop.prevent="
                  {
                    cart.addItem(product, shopPageQuan), (shopPageQuan = 1);
                  }
                "
                class="btn box-shadow-none btn-secondary rounded-0 fw-bold text-uppercase px-3 py-2 w-100 w-sm-auto"
                ><small>+ add to cart</small></a
              >
            </div>
            <div class="text-capitalize mt-2 small">
              <a href="#" class="small text-secondary text-decoration-none"><i class="fas fa-heart"></i> wishlist</a>
              <div class="vr mx-1 pt-2"></div>
            </div>
          </div>
          <div class="my-3">
            <p class="text-capitalize my-1">availability: <span class="text-success">in stock</span></p>
            <p class="text-capitalize my-3">
              <strong>Description:</strong> <span>{{ product.description }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  object-fit: contain !important;
  height: 400px !important;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0; /* Optional, if you want to remove any remaining spacing */
}
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>

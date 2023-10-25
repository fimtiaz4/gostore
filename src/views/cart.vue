<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import { cart } from "../store/cart";
const checkoutprice = ref(true);
const checkMinimumQuantity = (item) => {
  if (item.quantity < 1) {
    item.quantity = 1;
  }
};
</script>

<template>
  <Header class="search" />
  <main class="p-top-6rem p-md-top-10rem">
    <section class="bg-light">
      <div class="container-lg py-2 my-auto">
        <nav style="--bs-breadcrumb-divider: '>'">
          <ol class="breadcrumb text-capitalize small mt-3">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none">Home</router-link>
            </li>
            <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-secondary">cart</a></li>
          </ol>
        </nav>
      </div>
    </section>
    <section id="shoppign-bag" class="py-3">
      <div class="container-lg px-4">
        <div class="row">
          <div class="col-4 p-0">
            <div class="card h-100 rounded-0 border-0">
              <div class="card-body d-flex flex-column flex-md-row align-items-center text-center text-md-start p-0">
                <i class="fa-2x far fa-check-circle text-success mb-auto pe-0 pe-md-2"></i>
                <br class="d-block md-md-none" />
                <div class="py-1 py-md-0">
                  <h6 class="fw-bold text-uppercase mb-1">shoping bag</h6>
                  <p class="text-capitalize text-muted mb-1 small d-none d-md-block">view your items</p>
                </div>
              </div>
              <div class="card-footer rounded-0 border-0 p-0">
                <div class="progress h-2 bg-danger rounded-0">
                  <div class="progress-bar bg-danger" role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 p-0">
            <div class="card h-100 rounded-0 border-0">
              <div class="card-body d-flex flex-column flex-md-row align-items-center text-center text-md-start p-0">
                <i class="fa-2x far fa-check-circle mb-auto pe-0 pe-md-2"></i>
                <br class="d-block d-md-none" />
                <div class="py-1 py-md-0">
                  <h6 class="fw-bold text-uppercase mb-1">shoping checkout</h6>
                  <p class="text-capitalize text-muted mb-1 small d-none d-md-block">enter your details</p>
                </div>
              </div>
              <div class="card-footer rounded-0 border-0 p-0">
                <div class="progress h-2 rounded-0">
                  <div class="progress-bar bg-danger" role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 p-0">
            <div class="card h-100 rounded-0 border-0">
              <div class="card-body d-flex flex-column flex-md-row align-items-center text-center text-md-start p-0">
                <i class="fa-2x far fa-check-circle mb-auto pe-0 pe-md-2"></i>
                <br class="d-block d-md-none" />
                <div class="py-1 py-md-0">
                  <h6 class="fw-bold text-uppercase mb-1">payment confirmation</h6>
                  <p class="text-capitalize text-muted mb-1 small d-none d-md-block">confirm payment</p>
                </div>
              </div>
              <div class="card-footer rounded-0 border-0 p-0">
                <div class="progress h-2 rounded-0">
                  <div class="progress-bar bg-danger" role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="shoppign-bag" class="py-5">
      <div class="container-lg">
        <div class="row gap-3 gap-md-0">
          <div class="col-md-8" v-if="cart.totalCartItems > 0">
            <table class="table border">
              <thead class="text-uppercase">
                <tr class="d-none d-md-table-row">
                  <th class="d-md-table-cell py-3" scope="col">product</th>
                  <th class="d-md-table-cell py-3" scope="col">price</th>
                  <th class="d-md-table-cell py-3" scope="col">quantity</th>
                  <th class="d-md-table-cell py-3" scope="col">subtotal</th>
                  <th class="d-md-table-cell py-3" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="d-block d-md-table-row position-relative" v-for="item in cart.items">
                  <td class="d-block d-md-table-cell">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <router-link class="mb-0 text-decoration-none" :to="{ name: 'product', params: { id: item.product.id } }"><img class="img-fluid" :src="item.product.image" /> </router-link>
                        <!-- <img class="img-fluid" :src="item.product.image" /> -->
                      </div>
                      <div class="col">
                        <router-link class="mb-0 text-decoration-none" :to="{ name: 'product', params: { id: item.product.id } }">{{ item.product.title }} </router-link>
                      </div>
                    </div>
                  </td>
                  <td class="d-flex justify-content-between d-md-table-cell align-middle">
                    <span class="d-md-none">Price</span>
                    <span>${{ item.product.price }}</span>
                  </td>
                  <td class="d-flex justify-content-between d-md-table-cell align-middle">
                    <span class="d-md-none">Quantity</span>
                    <div class="btn-group btn-group-sm w-auto">
                      <button @click="item.quantity > 1 ? item.quantity-- : item.quantity" class="btn rounded-0 box-shadow-none btn-success">-</button>
                      <input type="number" min="1" v-model="item.quantity" @input="checkMinimumQuantity(item)" class="form-controle form-control-sm border rounded-0 outline-0 text-center" style="max-width: 3rem" />

                      <button @click="item.quantity++" class="btn rounded-0 box-shadow-none btn-success">+</button>
                    </div>
                  </td>
                  <td class="d-flex justify-content-between d-md-table-cell align-middle">
                    <span class="d-md-none">Subtotal</span>
                    <span>${{ (item.quantity * item.product.price).toFixed(2) }}</span>
                  </td>
                  <td class="d-block px-4 cursor-pointer d-md-table-cell align-middle position-absolute position-md-static top-0 start-auto end-0" @click="cart.removeItem(item.product.id)">x</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex gap-3 flex-column flex-lg-row justify-content-between">
              <div class="d-flex w-100 justify-content-between border-bottom border-dark">
                <input type="text" class="outline-0 border-0" id="" name="" placeholder="Coupon Code" />
                <button class="btn text-nowrap text-uppercase box-shadow-none border-0 p-0" type="button">apply coupon</button>
              </div>
              <div class="d-grid text-nowrap d-lg-block gap-2 pt-2">
                <button class="btn btn-sm btn-transparent text-uppercase box-shadow-none hover-bg-dark border border-dark rounded-0 px-3" @click="cart.saveCartInLocalStorage()">update cart</button>
                <button @click="cart.emptyCart()" class="update btn btn-sm btn-transparent text-uppercase box-shadow-none border text-secondary rounded-0 px-3">empty cart</button>
              </div>
            </div>
          </div>
          <div class="col-md-8 text-center" v-if="cart.totalCartItems == 0">
            <h3>Your cart is empty. Please add some items in the cart</h3>
            <router-link to="/shop" class="my-3 btn btn-sm btn-transparent text-uppercase box-shadow-none hover-bg-dark border border-dark rounded-0 px-3">Go to Shop</router-link>
          </div>
          <div class="col-md-4 pt-5 pt-md-0">
            <div class="text-uppercase border-dashed border-2 p-3 border-danger">
              <h6 class="fw-bold">cart totals</h6>
              <div class="d-flex justify-content-between align-items-center border-bottom small">
                <p class="pt-2">Items Total</p>
                <p class="pt-2">${{ cart.totalPrice }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center border-bottom small pt-3">
                <p class="align-self-start pe-4">shipping</p>
                <div class="text-capitalize">
                  <div class="form-check">
                    <input class="form-check-input" name="shiping" v-model="checkoutprice" :value="true" type="radio" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1"
                      >Collect from pickup point
                      <p>($5 each)</p></label
                    >
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" :value="false" type="radio" name="shiping" v-model="checkoutprice" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">Home Delivery <span class="fw-bold">$20</span> </label>
                  </div>
                </div>
              </div>
              <div class="text-center border-top">
                <div class="d-flex justify-content-between align-items-center border-bottom small pt-3">
                  <p>subtotal</p>
                  <p>${{ checkoutprice ? cart.shipEach : cart.shipAll }}</p>
                </div>
                <router-link to="/checkout" @click.stop.prevent="cart.addItemCheckout(checkoutprice ? cart.shipEach : cart.shipAll)" class="w-100 fw-bold text-white bg-red-danger hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none"><small>order and shipping</small></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
table img {
  height: 80px;
  width: 80px;
  object-fit: contain;
}

tr a {
  color: inherit;
}
.update:hover {
  border: red solid 1px !important;
  color: red !important;
  margin-left: 5px !important;
}
.update {
  margin-left: 5px !important;
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

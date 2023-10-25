<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import { cart } from "../store/cart";
import { authStore } from "../store/store";
const auth = authStore;
const checkoutprice = ref(true);
const checkMinimumQuantity = (item) => {
  if (item.quantity < 1) {
    item.quantity = 1;
  }
};
</script>

<template>
  <Header />
  <main class="p-top-6rem p-md-top-10rem">
    <section class="bg-light">
      <div class="container-lg py-2 my-auto">
        <nav style="--bs-breadcrumb-divider: '>'">
          <ol class="breadcrumb text-capitalize small mt-3">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none">Home</router-link>
            </li>
            <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-secondary">Checkout</a></li>
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
                <i class="fa-2x far fa-check-circle text-success mb-auto pe-0 pe-md-2"></i>
                <br class="d-block d-md-none" />
                <div class="py-1 py-md-0">
                  <h6 class="fw-bold text-uppercase mb-1">shoping checkout</h6>
                  <p class="text-capitalize text-muted mb-1 small d-none d-md-block">enter your details</p>
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
          <div class="col-md-8 mb-5 p-4 p-md-2">
            <h3 class="text-uppercase fw-bolder py-2">billing details</h3>
            <form class="row g-3 text-capitalize small border-0">
              <div class="w-lg-50">
                <label for="fname" class="form-label">First Name</label>
                <input type="text" v-model="auth.user.name" id="fname" name="fname" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="w-lg-50">
                <label for="lname" class="form-label">last name</label>
                <input type="text" id="lname" name="lname" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="">
                <label for="companyname" class="form-label">company name (optional)</label>
                <input type="text" id="companyname" name="companyname" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="">
                <label class="form-label" for="inlineFormSelectPref">country / region</label>
                <select class="form-select box-shadow-none rounded-0" id="inlineFormSelectPref">
                  <option selected="">Bangladesh</option>
                  <option value="1">Bangladesh</option>
                  <option value="2">two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="">
                <label for="inputAddress" class="form-label">street address</label>
                <input type="text" class="placeholder-sm form-control box-shadow-none rounded-0" id="inputAddress" placeholder="house number and street name" />
                <input type="text" class="placeholder-sm form-control box-shadow-none rounded-0 mt-3" id="inputAddress2" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
              <div class="">
                <label for="town" class="form-label">town / city</label>
                <input type="text" id="town" name="town" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="">
                <label for="country" class="form-label">company name (optional)</label>
                <input type="text" id="country" name="country" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="">
                <label for="postcode" class="form-label">postcode</label>
                <input type="text" id="postcode" name="postcode" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="">
                <label for="phone" class="form-label">phone</label>
                <input type="text" id="phone" name="phone" class="form-control box-shadow-none rounded-0" />
              </div>
              <div class="">
                <label for="email" class="form-label">email address</label>
                <input type="email" id="email" v-model="auth.user.email" name="email" class="form-control box-shadow-none rounded-0" />
              </div>
              <!-- accordion-->
              <div class="accordion" id="accordionExample">
                <div class="accordion-item border-0 border-bottom text-capitalize px-0 py-2">
                  <div class="accordion-header d-flex align-items-center box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shipping1">
                    <input class="form-check-input box-shadow-none rounded-0 m-0" type="checkbox" value="" />
                    <span class="ps-2 text-secondary">creatte an account</span>
                  </div>
                  <div id="shipping1" class="accordion-collapse collapse transition-800 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body px-0 fs-normal">
                      <div class="pb-1">
                        <label for="password" class="form-label">create account password</label>
                        <input type="password" id="password" name="password" class="form-control box-shadow-none rounded-0" checked="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 text-capitalize px-0 py-2">
                  <div class="accordion-header d-flex align-items-center box-shadow-none collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#shipping2">
                    <input class="form-check-input box-shadow-none rounded-0 m-0" type="checkbox" value="" />
                    <span class="ps-2 text-secondary">ship to a different address</span>
                  </div>
                  <div id="shipping2" class="accordion-collapse collapse transition-1000 timing-function-ease-out" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body px-0 row g-3 text-capitalize">
                      <div class="w-lg-50">
                        <label for="" class="form-label">first name</label>
                        <input type="text" id="" name="" class="form-control box-shadow-none rounded-0" />
                      </div>
                      <div class="w-lg-50">
                        <label for="" class="form-label">last name</label>
                        <input type="text" id="" name="" class="form-control box-shadow-none rounded-0" />
                      </div>
                      <div class="">
                        <label for="" class="form-label">company name (optional)</label>
                        <input type="text" id="" name="" class="form-control box-shadow-none rounded-0" />
                      </div>
                      <div class="">
                        <label class="form-label" for="inlineFormSelectPref">country / region</label>
                        <select class="form-select box-shadow-none rounded-0" id="">
                          <option selected="">bangladesh</option>
                          <option value="1">bangladesh</option>
                          <option value="2">two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="">
                        <label for="inputAddress" class="form-label">street address</label>
                        <input type="text" class="placeholder-sm form-control box-shadow-none rounded-0" id="" placeholder="house number and street name" />
                        <input type="text" class="placeholder-sm form-control box-shadow-none rounded-0 mt-3" id="" placeholder="Apartment, suite, unit, etc. (optional)" />
                      </div>
                      <div class="">
                        <label for="town" class="form-label">town / city</label>
                        <input type="text" id="" name="" class="form-control box-shadow-none rounded-0" />
                      </div>
                      <div class="">
                        <label for="" class="form-label">company name (optional)</label>
                        <input type="text" id="" name="" class="form-control box-shadow-none rounded-0" />
                      </div>
                      <div class="">
                        <label for="postcode" class="form-label">postcode</label>
                        <input type="text" id="" name="" class="form-control box-shadow-none rounded-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <label for="exampleFormControlTextarea1" class="form-label">order notes (optional)</label>
                <textarea class="form-control placeholder-sm box-shadow-none rounded-0" id="exampleFormControlTextarea1" rows="6" placeholder="notes about your order, e.g. special notes for delivery"></textarea>
              </div>
            </form>
          </div>
          <div class="col-md-4 pt-5 pt-md-0">
            <div class="text-uppercase border-dashed border-2 p-3 border-danger">
              <h6 class="fw-bold">cart totals</h6>

              <div v-for="item in cart.items" class="d-flex justify-content-between align-items-center border-bottom text-capitalize small py-3">
                <div>
                  <p class="mb-0">{{ item.product.title }}</p>
                  <p class="">x{{ item.quantity }}</p>
                </div>
                <p class="pt-2">${{ item.quantity * item.product.price }}</p>
              </div>
              <div class="d-flex font-weight-bold justify-content-between align-items-center border-bottom">
                <p class="pt-2">Items Total</p>
                <p class="pt-2">${{ cart.totalPrice }}</p>
              </div>
              <div class="font-weight-bold d-flex justify-content-between align-items-center border-bottom pt-3">
                <p class="font-weight-bold align-self-start pe-4">shipping</p>
                <div class="text-capitalize">${{ checkoutprice ? cart.shipEach1 : cart.shipAll1 }}</div>
              </div>
              <div class="text-center border-top">
                <div class="font-weight-bold d-flex justify-content-between align-items-center border-bottom pt-3">
                  <p>subtotal</p>
                  <p>${{ checkoutprice ? cart.shipEach : cart.shipAll }}</p>
                </div>
                <router-link to="/checkout" @click.stop.prevent="cart.addItemCheckout(checkoutprice ? cart.shipEach : cart.shipAll)" class="w-100 fw-bold text-white bg-red-danger hover-border-red hover-text-red hover-bg-transparent btn rounded-0 text-uppercase box-shadow-none"><small>Place order</small></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

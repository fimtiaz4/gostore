<script setup>
import { ref } from "vue";
// import axios from "axios";
import "../assets/js/bootstrap.bundle.js";
import "../assets/js/jquery-3.6.0.min.js";
import "../assets/js/jquery.zoom.min.js";
import "../assets/js/owl.carousel.min.js";
import "../assets/js/poper.min.js";
import { filter } from "../store/filter";
import { cart } from "../store/cart";
import { authStore } from "../store/store";
const auth = authStore;
// const filter = ref("sss");
</script>

<template>
  <header class="fixed-top bg-light transition-700" id="affix">
    <section id="homeAdHeader" class="d-none d-md-block container-fluid bg-no-repeat bg-position-center bg-size-cover" style="background-image: url(/src/assets/images/demo/store-noted-1.jpg)">
      <!-- ad section -->
      <div class="container-lg py-3"></div>
    </section>
    <section id="homeHeader" class="bg-light border-bottom shadow-sm pb-4">
      <div class="container-lg">
        <!-- header " logo, search-bar, language, usd, icons "  end-->
        <div class="row align-items-center">
          <div class="col-12 col-md-3 order-2 order-md-1 text-center text-md-start">
            <img class="img-fluid max-h-7 ps-2" src="/src/assets/images/demo/logo-dark.png" alt="logo" />
          </div>
          <div class="col-12 col-md-9 order-1 order-md-2">
            <div class="row g-0 justify-content-center align-items-center">
              <!-- header " search-bar" -->
              <div id="homeLinkButton" class="col-auto py-2 d-md-none">
                <button class="btn box-shadow-none text-body bg-transparent border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
              <div class="col col-xl-8 px-0 search-prod">
                <form action="" class="row g-0 border" id="category-search-box">
                  <div class="col input-group">
                    <input type="text" v-model="filter" class="form-control rounded-0 border-0 placeholder-sm" placeholder="Search for Product" />
                    <button class="input-group-text border-0 rounded-0 bg-white"><i class="fa fa-search"></i></button>
                  </div>
                </form>
              </div>

              <!-- "User Access" start-->
              <div id="main-nav-user" class="col-auto py-2 ms-auto">
                <ul class="nav text-uppercase small">
                  <li class="nav-item d-none d-md-block">
                    <a class="nav-link nav-link px-3 text-black small" href="# "
                      ><i @click="" class="far fa-user"
                        ><span class="px-2" v-if="auth.isAuthenticated" @click="authStore.logout()"
                          >Logout( <span class="text-info">{{ auth.user.name }}</span
                          >)</span
                        >

                        <router-link class="px-3 text-black inline-block" v-if="!auth.isAuthenticated" to="/login"><span>Login</span></router-link>
                      </i></a
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link position-relative" title="Unread Messages " to="/cart"
                      ><i class="fas fa-shopping-cart"></i> <span v-if="cart.totalCartItems > 0" class="position-absolute ms-n2 mt-2 top-0 start-100 translate-middle badge rounded-pill bg-red-danger"> {{ cart.totalCartItems > 99 ? "99+" : cart.totalCartItems }}</span></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="homeNav" class="d-none my-3 d-md-block">
      <div class="container-lg">
        <div class="row justify-content-center align-items-center">
          <div class="col small">
            <nav class="d-flex">
              <button class="btn btn-light box-shadow-none p-0 border-0 bg-transparent me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                <i class="fas fa-bars"></i>
              </button>
              <ul class="nav text-uppercase small">
                <li class="nav-item">
                  <router-link to="/" class="nav-link px-3 text-black">Homepages</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/shop" class="nav-link px-3 text-black">Shop</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!-- header " main-manu, nav-bar, information --end " -->
    <div class="offcanvas offcanvas-start text-start" tabindex="-1" id="offcanvasExample">
      <div class="offcanvas-header pt-4 px-4">
        <h5 class="offcanvas-title small fw-bolder" id="offcanvasExampleLabel">ALL DEPARTMENTS</h5>
        <button type="button" class="btn-close text-reset box-shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-uppercase small py-1 scroll-sm px-4 scroll-sm">
        <div class="accordion accordion-flush opacity-100 scroll-lg" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <div class="accordion-header accordion-button collapsed py-2 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              <h6 class="small mb-0">smartphone & tablet</h6>
            </div>
            <div id="collapseThree" class="accordion-collapse collapse transition-1000" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <ul class="list-group text-muted list-group-transparent list-group-border-0 text-capitalize ps-0">
                  <a href="#" class="list-group-item list-group-item-action text-muted px-0">samsung</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

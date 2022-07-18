<script setup>
import { useRoute } from "vue-router";
import { storeProduct } from "../stores/store_product.js";
import FullScreen_Search from "../components/FullScreen_Search.vue";

const route = useRoute();
let id = route.params.id;

//detail product
const productStore = storeProduct();
productStore.productDetails(id);
const detail = productStore.detailproduct;

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
</script>
<template>
  <div class="container-fluid detailProduct">
    <full-screen_-search />
    <div class="nav_bar">
      <div class="row">
        <div class="col">
          <router-link to="/" style="width: 50px; heigth: 50px"
            ><img src="../assets/icon/arrow-left.svg"
          /></router-link>
        </div>

        <div class="col">
          <div style="margin-top: 0.5rem; text-align: end">
            <span span="icon_basket">
              <router-link to="/cartProduct" style="padding: 20px">
                <i style="font-size: 24px">
                  <img class="nav_icon" src="../assets/icon/basket.svg" />
                </i>
                <span
                  v-if="productStore.quantityProducts > 0"
                  class="badge badge-warning"
                  id="lblCartCount"
                >
                  {{ productStore.quantityProducts }}
                </span>
              </router-link>
            </span>
            <span class="icon_search">
              <img
                class="nav_icon"
                @click="openSearch()"
                src="../assets/icon/search.svg"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
        :src="detail.image"
        class="card-img-top"
        alt="..."
        style="width: -webkit-fill-available"
      />
      <div class="card-body">
        <h5 class="card-title">{{ detail.name }}</h5>
        <p class="card-text">
          {{ detail.description }}
        </p>
        <button type="button" class="btn btn-light" @click="productStore.addToCart(id)">
          <h5>Aggiungi al Carrello</h5>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.detailProduct {
  padding: 0px;
}
.detailProduct .nav_bar {
  width: 100%;
  position: absolute;
  z-index: 99999;
  margin: 0px !important;
  --bs-gutter-x: 0;
}

.items {
  margin-top: 1em;
}
.detailProduct .nav_bar .row .col {
  padding-left: 0px;
}
.icon_basket {
  padding-left: 0px;
  padding-right: 0px;
}

.icon_search {
  padding-left: 0;
  padding-right: 10px;
}

.nav_icon {
  margin: 0px;
  width: 40px;
  height: 40px;
}
</style>

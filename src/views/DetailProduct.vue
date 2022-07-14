<script setup>
import { useRoute } from "vue-router";
import { storeProduct } from "../stores/store_product.js";

const route = useRoute();
let id = route.params.id;
console.log(id);

//detail product
const detailproduct = storeProduct();
detailproduct.productDetails(id);
const detail = detailproduct.detailproduct;
console.log(detail);

//add_to_cart eliminare
const cartProduct = detailproduct.cartProduct;
console.log(cartProduct);

</script>
<template>
  <div class="container">
    <header class="detheader">
    <span ><router-link to="/" style="width:50px; heigth:50px"><img  src="../assets/icon/arrow-left.svg"></router-link></span>
    <span style="margin-left:200px"><router-link to="/cartProduct" style="padding:20px;"><img src="../assets/icon/cart.svg"/></router-link>
    <img src="../assets/icon/search.svg"  style="padding:20px;"></span>
    </header>
    
    
    
    
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
        <button type="button" class="btn btn-light" @click="detailproduct.addToCart(id)">
        <h5>Aggiungi al Carrello</h5>
          <!--<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>-->
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.detheader{
  z-index: 999999;
  position: absolute;
}

</style>
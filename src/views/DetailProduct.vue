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

//add_to_cart
const cart = detailproduct.cart_product;
console.log(cart);
function addToCart() {
  cart.foreach(element => {
    if (element.id == detail.id) {
      element.quantity = element.quantity++;
      
    }else{
      let quantity=1;
      const add_product = {
        id: detail.id,
        name: detail.name,
        img: detail.image,
        price: detail.price,
        quantity: quantity,
      };
      cart.push(add_product);
    }
  });
  

  
}

console.log(cart);
</script>
<template>
  <div class="container">
    <div><router-link to="/">Indietro</router-link></div>
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
        <button type="button" class="btn btn-light" @click="addToCart()">
          <svg
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
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeProduct } from "../stores/store_product";

const store= storeProduct()

const array_cart=store.cart_product;
console.log(array_cart);
</script>
<template>
  <div class="container">
   
    <div class="row" v-for="(item,id) in array_cart" :key="id">
      <div class="col" style="border: 1px solid black">
        <img :src="item.img" style="width: 100%" />
      </div>
      <div class="col-7" style="border: 1px solid black">
        <div class="container">
          <div class="row"><h5>{{item.name}}</h5></div>
          <div class="row">
            <div class="col">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">+</button>
                <span>1</span>
                <button type="button" class="btn btn-secondary">-</button>
               
              </div>
            </div>
            <div class="col">{{item.price}}€</div>
          </div>
          <div class="row">Rimuovi</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" style="border: 1px solid black">
        <img src="../assets/img/burger.jpeg" style="width: 100%" />
      </div>
      <div class="col-7" style="border: 1px solid black">
        <div class="container">
          <div class="row"><h5>Nome prodotto</h5></div>
          <div class="row">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">+</button>
                <span>1</span>
                <button type="button" class="btn btn-secondary">-</button>
               
              </div>
            <div class="col">12 €</div>
          </div>
          <div class="row">Rimuovi</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn{
    width: 25px;
    height: 25px;
    line-height: 1;
    padding: 0rem 0rem;
    font-size: 1rem;
}
</style>

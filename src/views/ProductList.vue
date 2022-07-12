<script setup>
import {storeProduct} from '../stores/store_product.js'

const productStore= storeProduct();

const listProduct=productStore.getProducts()
console.log(listProduct);
</script>

<template>
  <main>
   <div class="container" style="border: 1px solid black">
    <div class="row">
      <div class="col">LOGO</div>
      <div class="col">
        <div class="row">
          <img src="../assets/icon/cart.svg" style="margin: auto; width: auto" /><img
            src="../assets/icon/search.svg"
            style="margin: auto; width: auto"
          />
        </div>
      </div>
      <div class="row" style="margin: auto">
    <div
    class="col"
    v-for="(item, id) in productStore.products"
    :key="id"
    style="border: 1px solid black"
    data-test="card_product"
  >

    <router-link :to="{
       name:'DetailProduct',
       params:{id:item.id}

    }">
      <div class="card" style="width: 100%; heigth: 50%">
        <img :src="item.image" class="card-img-top" alt="..." style="width:100%" />
        <div class="card-body">
          <div class="row">
            <h2>{{ item.name }}</h2>
          </div>
          <div class="row" style="text-align: end">{{ item.price }}€</div>
          <div>
            Detaglio <span><img src="../assets/icon/arrow-right.svg" /></span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</div>
  </div>
    </div>
  </main>
</template>

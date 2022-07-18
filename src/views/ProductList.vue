<script setup>
import { storeProduct } from "../stores/store_product.js";

import FullScreen_Search from "../components/FullScreen_Search.vue"
const productStore = storeProduct();
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
</script>

<template>
  <main>
  
    <div class="prductlist container">
    <full-screen_-search/>
      <div class="nav_bar">
        <div class="row">
          <div class="col"><img class="logo" src="../assets/logo.svg" /></div>

          <div class="col">
            <div style="margin-top: 2rem; text-align: end">
              <span>
                <a aria-current="page" href="/cartProduct">
                <i  style="font-size:24px">
                <img class="nav_icon" src="../assets/icon/basket.svg"/>
                </i>
                <span  v-if="productStore.quantityProducts > 0" class='badge badge-warning' id='lblCartCount'> {{ productStore.quantityProducts }} </span>
                </a>
              </span>
              <span>
                <img class="nav_icon" @click="openSearch()" src="../assets/icon/search.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row items" >
        <div
          class="col"
          v-for="(item, id) in productStore.products"
          :key="id"
          data-test="card_product"
        >
          <router-link
            :to="{
              name: 'DetailProduct',
              params: { id: item.identifier },
            }"
          >
            <div class="card" >
              <img :src="item.image" class="card-img-top" alt="..." style="width: 100%" />
              <div class="card-body">
                <div class="row">
                  <h2>{{ item.name }}</h2>
                </div>
                <div class="row price" ><h4>{{ item.price }} €</h4></div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.nav_bar {
  margin: auto;
}
.nav_bar .row {
  margin: 0px !important;
}
.nav-link {
  display: inline !important;
}
.logo {
  width: 120px;
  padding: 0px;
}
.nav_icon {
  margin: 0px;
  width: 40px;
  height: 40px;
}

.items{
margin-top: 1em
}

.items .card{
background-color: #fff;
background-clip: border-box;
margin-bottom: 1rem;
border:none;
}
.items  .card-body{
  padding: 10px;
}
.price{
text-align: start
}

span {
  width: auto;
  height: auto;
  padding-left: 0.9rem;
  padding-right: 0.5rem;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
    font-size: 13px;
    background: #DC633A;
    color: #fff;
    padding: 6px 7px;
    vertical-align: top;
    margin-left: -11px;
}
</style>

<script setup>
import { storeProduct } from '../stores/store_product';
import { ref } from 'vue';

const productStore = storeProduct();
const products= productStore.products;
const resultsearch=ref([]);

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function filteredList(input){
    let results= products.filter((product)=> 
    product.name.toLowerCase().includes(input.toLowerCase()));

    resultsearch.value=results;
}
</script>
<template>
<div id="myOverlay" class="overlay">
  <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
  <div class="overlay-content">
    <form action="/action_page.php">
      <input type="text" v-model="input" @input="filteredList(input)" placeholder="Search.." name="search">
     
    </form>
    <div class="result">
     <ul style="color:#fff; width:100%; heigth:100%" >
     <li style="color:#fff" v-for="item in resultsearch" :key="item.identifier">
     
     <router-link :to="'/detailProduct/'+item.identifier">{{ item.name }}</router-link>
     
     </li>
     
     </ul>
    </div>
  </div>
</div>
</template>
<style>

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
}

.overlay-content {
  position: relative;
  top: 14%;
  width: 95%;
  text-align: center;
  margin-top: 30px;
  margin: 10px;
}
.overlay input {

    float: none !important;
    width: 85% !important;
}

.overlay .closebtn {
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}


.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}
.result{
    width: 85%;
    text-align: start;
    margin-top: 1rem;
    margin: auto;
}

.result li{
 list-style: none;
}
.result li a{
    color:#fff;
}

</style>
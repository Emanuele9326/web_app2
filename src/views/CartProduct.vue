<script setup>
import { storeProduct } from '../stores/store_product';

const store= storeProduct();
const cartItem= store.cartProduct;

// remove item 

function removeCart_item(id){
  cartItem.forEach((item,i)=>{
         if(item.id==id){
          if(item.quantity !== 1){
            item.quantity--
          }else{
            cartItem.splice(i,1);
          }
         }
        store.totalPrice();
  })
}
</script>
<template>
  <div class="container">
  <header >
    <span ><router-link to="/" style="width:50px; heigth:50px"><img  src="../assets/icon/arrow-left.svg"></router-link></span>
    <span style="margin-left:200px"><router-link to="/cartProduct" style="padding:20px;"><img src="../assets/icon/cart.svg"/></router-link>
    <img src="../assets/icon/search.svg"  style="padding:20px;"></span>
    </header>
    <div class="row">
      <h1>Carrello</h1>
    </div>
    <div class="container">
   
    <div class="row" v-for="(item,id) in cartItem" :key="id">
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
                <span>{{item.quantity}}</span>
                <button type="button" class="btn btn-secondary">-</button>
               
              </div>
            </div>
            <div class="col">{{item.price}}€</div>
          </div>
          <div class="row">
          <button @click="removeCart_item(item.id)">Rimuovi</button></div>
        </div>
      </div>
    </div>

    <div class="row"><h5> Totale: {{ store.total }}€</h5></div>
    <div class="row"><button><h5>Concludi Acquisto</h5></button></div>
   
  </div>
  </div>
  
</template>

<style></style>

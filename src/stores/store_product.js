import { defineStore } from 'pinia'

import axios from 'axios'


export const storeProduct = defineStore({
    id: 'listproduct',
    state: () => ({
        products: [],

        detailproduct: [],

        cart_product: [],


    }),


    actions: {


        async getProducts() {

            await axios
                .get("https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json")
                .then((response) => {
                    let listproducts = response.data


                    listproducts.forEach((element, index) => {
                        element['id'] = index
                    });
                    this.products = listproducts;
                    console.log(this.products);


                }).catch((error) => {
                    console.log(error)
                })
        },

        productDetails(Id) {
            this.products.forEach(element => {
                if (element.id == Id) {

                    this.detailproduct = element;

                }
            })
        }



    },
    persist: true,
})
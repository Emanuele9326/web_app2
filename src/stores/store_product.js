import { defineStore } from 'pinia'

import axios from 'axios'



export const storeProduct = defineStore({
    id: 'listproduct',
    state: () => ({
        products: [],

        detailproduct: [],

        cartProduct: [],

        total: 0


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
        },

        addToCart(id) {
            if (this.cartProduct.length !== 0) {
                this.cartProduct.forEach(element => {
                    if (element.id == id) {
                        element.quantity++;
                    } else {
                        let quantity = 1;
                        const add_product = {
                            'id': this.detailproduct.id,
                            'name': this.detailproduct.name,
                            'img': this.detailproduct.image,
                            'price': this.detailproduct.price,
                            'quantity': quantity,
                        };
                        this.cartProduct.push(add_product);
                    }
                })
            } else {
                let quantity = 1;
                const add_product = {
                    'id': this.detailproduct.id,
                    'name': this.detailproduct.name,
                    'img': this.detailproduct.image,
                    'price': this.detailproduct.price,
                    'quantity': quantity,
                };
                this.cartProduct.push(add_product);
            }

            this.totalPrice();
        },

        totalPrice() {
            let quantityPurchases = this.cartProduct.length;

            //quantità totale prodotti
            let quantity_item = 0
            if (quantityPurchases !== 0) {
                this.cartProduct.forEach(item => {
                    quantity_item = quantity_item + item.quantity;
                })
            }

            if (quantityPurchases == 0) {
                this.total = 0;
                return this.total;


            } else if (quantity_item < 3 && quantity_item > 0) {
                this.total = 0;
                this.cartProduct.forEach(item => {
                    this.total = this.total + (item.price * item.quantity)
                })
                return this.total;
            } else {
                this.total = 0;
                this.cartProduct.forEach(item => {
                    this.total = this.total + (item.price * item.quantity)
                })

                let discountValue = (this.total / 100) * 10;

                this.total = this.total - discountValue;
                this.total = this.total.toFixed(2)
                return this.total;
            }
        }


    },
    persist: true,
})
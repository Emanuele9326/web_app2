import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import DetailProduct from '../views/DetailProduct.vue'
import CartProduct from '../views/CartProduct.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'ProductList',
            component: ProductList
        },
        {
            path: '/detailProduct/:id',
            name: 'DetailProduct',
            component: DetailProduct
        },
        {
            path: '/cartProduct',
            name: 'CartProduct',
            component: CartProduct
        },
        /*{
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        }*/
    ]
})

export default router
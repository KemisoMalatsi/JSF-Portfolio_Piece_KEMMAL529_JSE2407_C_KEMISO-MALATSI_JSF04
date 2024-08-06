import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../src/page/Home.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../../src/page/Cart.vue';
import Wishlist from '../../src/page/Wishlist.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
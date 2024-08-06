import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../src/view/Home.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../../src/view/Cart.vue';
import Wishlist from '../../src/view/Wishlist.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
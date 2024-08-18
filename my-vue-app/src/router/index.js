import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';
import Cart from '../page/Cart.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

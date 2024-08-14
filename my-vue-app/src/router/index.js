import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../page/Cart.vue';
import Wishlist from '../page/Wishlist.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true },
  { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } },  // Protected route
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { requiresAuth: true } },  // Protected route
  { path: '/login', name: 'Login', component: Login }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwt');  // Check if JWT is in local storage
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } });  // Redirect to login if not authenticated
  } else {
    next();  // Proceed to the route
  }
});

export default router;

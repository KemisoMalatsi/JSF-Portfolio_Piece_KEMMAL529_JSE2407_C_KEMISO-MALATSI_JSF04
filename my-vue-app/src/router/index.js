import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../page/Cart.vue';
import Wishlist from '../page/Wishlist.vue';
import Login from '../components/Login.vue';
import Comparison from '../page/Comparison.vue'; // Import the Comparison component

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true },
  { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { requiresAuth: true } },
  { path: '/comparison', name: 'Comparison', component: Comparison, meta: { requiresAuth: true } }, // Add the Comparison route
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'), // Create history mode for clean URLs
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } }); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to the route if authenticated or no auth required
  }
});

export default router;
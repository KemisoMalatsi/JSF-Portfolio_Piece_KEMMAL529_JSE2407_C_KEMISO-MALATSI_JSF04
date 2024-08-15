import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';
import Cart from '../page/Cart.vue';
import Wishlist from '../page/Wishlist.vue';
import ComparisonList from '../page/ComparisonList.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { requiresAuth: true } },
  { path: '/comparison-list', name: 'ComparisonList', component: ComparisonList, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwt');  // Check if the user is authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } });  // Redirect to login if not authenticated
  } else {
    next();  // Allow access if authenticated
  }
});

export default router;

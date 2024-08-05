import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../Product/ProductList.vue';
import ProductDetail from '../Product/ProductDetails.vue';

const routes = [
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

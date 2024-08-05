import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProductList from '../Product/ProductList.vue'
import ProductDetail from '../Product/ProductDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

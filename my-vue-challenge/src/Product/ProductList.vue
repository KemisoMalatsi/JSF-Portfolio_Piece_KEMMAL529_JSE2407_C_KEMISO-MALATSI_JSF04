<template>
  <div class="grid justify-center">
    <div v-if="loading && !error" class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
      <CardSkeleton v-for="(_, index) in 20" :key="index" />
    </div>
    <Error v-else-if="error" :error="error" />
    <div v-else class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
      <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '../store/productStore';
import ProductCard from '../Product/ProductCard.vue';
// import CardSkeleton from './CardSkeleton.vue';
import Error from './Error.vue';

const productStore = useProductStore();
const products = computed(() => productStore.products);
const loading = computed(() => productStore.loading);
const error = computed(() => productStore.error);
</script>

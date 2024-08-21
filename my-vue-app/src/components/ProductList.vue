<template>
  <div class="p-4 bg-[#caf0f8] dark:bg-gray-900">
    <h1 class="text-2xl font-semibold mb-4 text-black dark:text-white">Products</h1>
    <!-- Product grid -->
    <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id" class="product-card border shadow p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
        <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4" />
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-blue-500 dark:text-blue-300 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="text-blue-500 dark:text-blue-300 hover:underline">
          View Details
        </router-link>
      </div>
    </div>
    <!-- Message when no products are available -->
    <div v-else class="text-center text-gray-600 dark:text-gray-300">
      No products available.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  border-radius: 15px;
  overflow: hidden;
}
</style>
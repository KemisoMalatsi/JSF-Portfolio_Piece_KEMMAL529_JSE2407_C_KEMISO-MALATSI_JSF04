<template>
  <div class="p-4 bg-[#caf0f8] dark:bg-gray-900">
    <!-- Category filter, search bar, and sort dropdown -->
    <div class="flex items-center justify-between mb-4">
      <div>
        <select class="p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300" v-model="selectedCategory" @change="getProduct">
          <option value="all">All categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      <div class="flex-1 mx-4">
        <input type="text" placeholder="Search products..." class="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300" v-model="searchQuery" @input="filterProducts" />
      </div>
      <div>
        <select class="p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300" v-model="sortOrder" @change="sortProducts">
          <option value="default">Sort by: Default</option>
          <option value="price-asc">Sort by: Price - Low to High</option>
          <option value="price-desc">Sort by: Price - High to Low</option>
        </select>
      </div>
    </div>

    <!-- Loading spinner -->
    <div v-if="loading" class="flex items-center justify-center">
      <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>

    <!-- Render product list -->
    <template v-if="!loading && !selectedProduct">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" @click="handleProductClick(product)" class="product-card border shadow p-4 bg-white dark:bg-gray-800 text-black dark:text-white cursor-pointer">
          <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4" />
          <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-gray-500 dark:text-gray-300 mb-2">{{ product.category }}</p>
          <p class="text-blue-500 dark:text-blue-300 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
          <div class="flex gap-2">
            <button @click.stop="addToCart(product)" class="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition">Add to Cart</button>
            <button @click.stop="addToWishlist(product)" class="bg-gray-500 dark:bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 dark:hover:bg-gray-800 transition">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  // Existing script code remains unchanged
};
</script>

<style scoped>
.product-card {
  border-radius: 15px;
  overflow: hidden;
}
</style>

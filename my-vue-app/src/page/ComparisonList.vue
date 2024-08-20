<template>
  <div class="p-4 bg-white dark:bg-gray-800">
    <h1 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Comparing {{ comparisonItems.length }} of 8 products</h1>

    <div v-if="comparisonItems.length === 0" class="text-center text-gray-600 dark:text-gray-300">
      No items selected for comparison.
    </div>

    <div v-else class="overflow-x-auto">
      <table class="table-auto w-full bg-white dark:bg-gray-800">
        <thead>
          <tr class="bg-gray-200 dark:bg-gray-700">
            <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Description</th>
            <th v-for="product in comparisonItems" :key="product.id" class="px-4 py-2 text-gray-700 dark:text-gray-200">{{ product.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Image</td>
            <td v-for="product in comparisonItems" :key="product.id" class="px-4 py-2">
              <img :src="product.image" :alt="product.title" class="h-16 w-16 object-contain mx-auto" />
            </td>
          </tr>
          <tr>
            <td class="px-4 py-2">Price</td>
            <td v-for="product in comparisonItems" :key="product.id" class="px-4 py-2 text-blue-500 dark:text-blue-400">${{ product.price.toFixed(2) }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Brand</td>
            <td v-for="product in comparisonItems" :key="product.id" class="px-4 py-2">{{ product.brand || 'N/A' }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Tech Info</td>
            <td v-for="product in comparisonItems" :key="product.id" class="px-4 py-2">
              <a :href="product.techInfo" target="_blank" class="text-blue-500 dark:text-blue-400">View PDF</a>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-2">Remove</td>
            <td v-for="product in comparisonItems" :key="product.id" class="px-4 py-2">
              <button @click="removeFromComparison(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="comparisonItems.length > 0" class="mt-4">
      <button @click="clearComparison" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Clear Comparison</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    comparisonItems() {
      return this.$store.getters.comparisonItems;
    },
  },
  methods: {
    removeFromComparison(productId) {
      this.$store.commit('removeFromComparison', productId);
    },
    clearComparison() {
      this.$store.commit('clearComparison');
    },
  },
};
</script>

<style scoped>
/* Additional styles as needed */
</style>

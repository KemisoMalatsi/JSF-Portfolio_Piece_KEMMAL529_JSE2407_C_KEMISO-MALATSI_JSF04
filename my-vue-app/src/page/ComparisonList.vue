<template>
    <div class="p-4 bg-[#caf0f8]">
      <h1 class="text-2xl font-semibold mb-4">Comparison List</h1>
      <button @click="clearComparisonList" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mb-4">
        Clear Comparison List
      </button>
      
      <div v-if="comparisonItems.length === 0" class="text-center text-gray-600">Your comparison list is empty.</div>
      <div v-else class="overflow-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="p-4 border-b" v-for="(product, index) in comparisonItems" :key="index">{{ product.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b" v-for="(product, index) in comparisonItems" :key="index">
                <img :src="product.image" :alt="product.title" class="w-24 h-24 object-contain">
              </td>
            </tr>
            <tr>
              <td class="p-4 border-b" v-for="(product, index) in comparisonItems" :key="index">{{ product.description }}</td>
            </tr>
            <tr>
              <td class="p-4 border-b" v-for="(product, index) in comparisonItems" :key="index">${{ product.price }}</td>
            </tr>
            <tr>
              <td class="p-4 border-b" v-for="(product, index) in comparisonItems" :key="index">
                Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
              </td>
            </tr>
            <tr>
              <td class="p-4 border-b text-center" v-for="(product, index) in comparisonItems" :key="index">
                <button @click="removeFromComparisonList(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      comparisonItems() {
        return this.$store.getters.comparisonItems;
      }
    },
    methods: {
      removeFromComparisonList(productId) {
        this.$store.commit('removeFromComparisonList', productId);
      },
      clearComparisonList() {
        this.$store.commit('clearComparisonList');
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  </style>
  
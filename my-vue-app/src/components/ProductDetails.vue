<template>
  <div class="p-4 bg-[#caf0f8] dark:bg-gray-900">
    <button @click="$router.go(-1)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4">Back</button>
    <div v-if="product">
      <h1 class="text-2xl font-semibold mb-4 text-black dark:text-white">{{ product.title }}</h1>
      <img :src="product.image" :alt="product.title" class="w-full h-auto mb-4" />
      <p class="text-gray-700 dark:text-gray-300 mb-4">{{ product.description }}</p>
      <p class="text-blue-500 dark:text-blue-300 font-bold mb-4">${{ product.price }}</p>
      <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add to Cart</button>
    </div>
    <div v-else class="text-center text-gray-600 dark:text-gray-300">
      Loading product details...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.fetchProductDetails();
  },
  methods: {
    async fetchProductDetails() {
      const productId = this.$route.params.id;
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        this.product = data;
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
  },
};
</script>
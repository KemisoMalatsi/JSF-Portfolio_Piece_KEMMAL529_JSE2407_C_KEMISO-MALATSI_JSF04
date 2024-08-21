<template>
  <div>
    <ProductList @select-product="selectProduct" />
    <Login v-if="showLogin" @login="handleLogin" @cancel="showLogin = false" />
    <div v-if="wishlistItems.length > 0" class="mt-8">
      <h2 class="text-2xl font-semibold mb-4 text-black dark:text-white">Your Wishlist</h2>
      <div class="flex overflow-x-auto space-x-4">
        <div v-for="product in wishlistItems" :key="product.id" class="w-1/4 flex-shrink-0 product-card border shadow p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
          <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4" />
          <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-blue-500 dark:text-blue-300 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
          <button @click="removeFromWishlist(product.id)" class="bg-red-500 dark:bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 dark:hover:bg-red-800 transition">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import Login from '../../src/components/Login.vue';

export default {
  components: {
    ProductList,
    Login
  },
  data() {
    return {
      showLogin: false
    };
  },
  computed: {
    wishlistItems() {
      return this.$store.getters.wishlist;
    }
  },
  methods: {
    handleLogin() {
      this.$store.commit('setIsLoggedIn', true);
      this.showLogin = false;
    },
    selectProduct(product) {
      this.$router.push({ name: 'ProductDetails', params: { id: product.id } });
    },
    removeFromWishlist(productId) {
      this.$store.commit('removeFromWishlist', productId);
    }
  }
};
</script>

<style scoped>
.product-card {
  border-radius: 15px;
  overflow: hidden;
}
</style>

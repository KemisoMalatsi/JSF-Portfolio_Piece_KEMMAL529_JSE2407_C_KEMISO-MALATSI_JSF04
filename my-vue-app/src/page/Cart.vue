<template>
  <div class="p-4 bg-[#caf0f8] dark:bg-gray-900 dark:text-gray-100">
    <h1 class="text-2xl font-semibold mb-4">Cart</h1>
    <button @click="$router.push('/')" class="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4">Back to Products</button>
    
    <!-- Sorting and Filtering Controls -->
    <div class="flex items-center justify-between mb-4">
      <div>
        <select class="p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800" v-model="sortOrder" @change="sortItems">
          <option value="default">Sort by: Default</option>
          <option value="price-asc">Sort by: Price - Low to High</option>
          <option value="price-desc">Sort by: Price - High to Low</option>
        </select>
      </div>
      <div class="flex-1 mx-4">
        <input type="text" placeholder="Search items..." class="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800" v-model="searchQuery" @input="filterItems" />
      </div>
    </div>
    
    <div v-if="filteredCart.length === 0" class="text-center text-gray-600 dark:text-gray-400">Your cart is empty.</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in filteredCart" :key="product.id" class="product-card border shadow p-4 bg-white dark:bg-gray-800 dark:text-gray-100">
        <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4" />
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-2">{{ product.category }}</p>
        <p class="text-blue-500 dark:text-blue-300 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
        
        <div class="flex items-center justify-between mb-2">
          <button @click="updateQuantity(product.id, product.quantity - 1)" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">-</button>
          <span>{{ product.quantity }}</span>
          <button @click="updateQuantity(product.id, product.quantity + 1)" class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition">+</button>
        </div>
        
        <button @click="removeFromCart(product.id)" class="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 transition">Remove from Cart</button>
      </div>
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">Total: ${{ cartTotal }}</h2>
      <button @click="clearCart" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-4">Clear Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortOrder: 'default',
      searchQuery: '',
      filteredCart: []
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotalCost;
    },
  },
  watch: {
    cart: 'updateFilteredCart',
    sortOrder: 'sortItems',
    searchQuery: 'filterItems'
  },
  methods: {
    updateFilteredCart() {
      this.filteredCart = [...this.cart];
      this.sortItems();
      this.filterItems();
    },
    sortItems() {
      if (this.sortOrder === 'price-asc') {
        this.filteredCart.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'price-desc') {
        this.filteredCart.sort((a, b) => b.price - a.price);
      }
    },
    filterItems() {
      this.filteredCart = this.cart.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      this.sortItems();
    },
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    },
    updateQuantity(productId, quantity) {
      if (quantity >= 0) {
        this.$store.commit('updateCartItemQuantity', { productId, quantity });
      }
    },
    clearCart() {
      this.$store.commit('clearCart');
    }
  },
  created() {
    this.updateFilteredCart();
  }
};
</script>

<style scoped>
.product-card {
  border-radius: 15px;
  overflow: hidden;
}
</style>

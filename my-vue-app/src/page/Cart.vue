<template>
  <div class="p-4 bg-[#caf0f8]">
    <h1 class="text-2xl font-semibold mb-4">Cart</h1>
    <button @click="$router.push('/')" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4">Back to Products</button>

    <div v-if="filteredCart.length === 0" class="text-center text-gray-600">Your cart is empty.</div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in filteredCart" :key="product.id" class="product-card border shadow p-4 bg-white">
          <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4" />
          <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-gray-500 mb-2">{{ product.category }}</p>
          <p class="text-blue-500 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
          <input type="number" min="1" v-model.number="product.quantity" @change="updateQuantity(product.id, product.quantity)" class="w-full p-2 border rounded">
          <button @click="removeFromCart(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-2">Remove</button>
        </div>
      </div>
      <div class="mt-8">
        <h3 class="text-xl font-semibold">Total: ${{ cartTotal }}</h3>
        <button @click="clearCart" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-4">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filteredCart() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    updateQuantity(productId, quantity) {
      this.$store.commit('updateCartQuantity', { productId, quantity });
    },
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    },
    clearCart() {
      this.$store.commit('clearCart');
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

<template>
  <div class="p-4 bg-[#caf0f8]">
    <h1 class="text-2xl font-semibold mb-4">Cart</h1>
    <button @click="$router.push('/')" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4">
      Back to Products
    </button>

    <div v-if="cartItems.length === 0" class="text-center text-gray-600">
      Your cart is empty.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in cartItems" :key="product.id" class="product-card border shadow p-4 bg-white">
        <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4" />
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-500 mb-2">{{ product.category }}</p>
        <p class="text-blue-500 font-bold mb-2">{{ formatPrice(product.price) }}</p>
        <div class="text-gray-500 mb-2 flex items-center">
          <button @click="updateQuantity(product.id, product.quantity - 1)" class="px-2 py-1 bg-gray-200 rounded">-</button>
          <span class="mx-4">{{ product.quantity }}</span>
          <button @click="updateQuantity(product.id, product.quantity + 1)" class="px-2 py-1 bg-gray-200 rounded">+</button>
        </div>
        <button @click="removeFromCart(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Remove from Cart
        </button>
      </div>
    </div>

    <div v-if="cartItems.length > 0" class="text-right mt-4">
      <h2 class="text-xl font-bold">Total: {{ formattedTotal }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    formattedTotal() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.cartTotal);
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    },
    formatPrice(price) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    },
    updateQuantity(productId, newQuantity) {
      if (newQuantity < 1) {
        this.removeFromCart(productId); // Remove item if quantity is less than 1
      } else {
        this.$store.commit('updateCartQuantity', { productId, quantity: newQuantity });
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

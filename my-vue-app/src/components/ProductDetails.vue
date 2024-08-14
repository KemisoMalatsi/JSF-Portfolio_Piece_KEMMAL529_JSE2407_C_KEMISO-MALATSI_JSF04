<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <img :src="product.image" :alt="product.title" class="w-full h-auto" />
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add to Cart</button>
      <button @click="addToWishlist(product)" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Add to Wishlist</button>
      <button @click="removeFromCart(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Remove from Cart</button>
      <button @click="removeFromWishlist(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Remove from Wishlist</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Retrieves the product based on the route parameter `id`.
     * First, it tries to find the product in the cart items,
     * then in the wishlist items.
     * Logs the product to check the image URL.
     * @returns {Object|null} The product object or null if not found.
     */
    product() {
      const product = this.$store.getters.cartItems.find(product => product.id === Number(this.$route.params.id)) || 
                      this.$store.getters.wishlistItems.find(product => product.id === Number(this.$route.params.id));
      console.log('Product:', product); // Log product to check image URL
      return product;
    }
  },
  methods: {
    /**
     * Adds a product to the cart.
     * @param {Object} product - The product to add.
     */
    addToCart(product) {
      this.$store.commit('cart/addToCart', product);
    },
    /**
     * Adds a product to the wishlist.
     * @param {Object} product - The product to add.
     */
    addToWishlist(product) {
      this.$store.commit('wishlist/addToWishlist', product);
    },
    /**
     * Removes a product from the cart.
     * @param {number} productId - The ID of the product to remove.
     */
    removeFromCart(productId) {
      this.$store.commit('cart/removeFromCart', productId);
    },
    /**
     * Removes a product from the wishlist.
     * @param {number} productId - The ID of the product to remove.
     */
    removeFromWishlist(productId) {
      this.$store.commit('wishlist/removeFromWishlist', productId);
    }
  },
  created() {
    /**
     * Fetches products if the product is not found in the store.
     * Forces the component to update after fetching products.
     */
    if (!this.product) {
      this.$store.dispatch('fetchProducts').then(() => {
        this.$forceUpdate(); // Force component update after fetch
      });
    }
  }
};
</script>
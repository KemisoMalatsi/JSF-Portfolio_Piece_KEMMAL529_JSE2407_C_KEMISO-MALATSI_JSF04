<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <img :src="product.image" :alt="product.title" class="w-full h-auto" />
      <p>{{ product.description }}</p>
      <p>\${{ product.price }}</p>
      <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Add to Cart
      </button>
      <button @click="addToWishlist(product)" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
        Add to Wishlist
      </button>
      <button @click="removeFromCart(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Remove from Cart
      </button>
      <button @click="removeFromWishlist(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Remove from Wishlist
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      const product = this.$store.getters.cartItems.find(product => product.id === Number(this.$route.params.id)) || 
                      this.$store.getters.wishlistItems.find(product => product.id === Number(this.$route.params.id));
      console.log('Product:', product);
      return product;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    addToWishlist(product) {
      this.$store.commit('addToWishlist', product);
    },
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    },
    removeFromWishlist(productId) {
      this.$store.commit('removeFromWishlist', productId);
    }
  },
  created() {
    if (!this.product) {
      this.$store.dispatch('fetchProducts').then(() => {
        this.$forceUpdate(); // Force component update after fetch
      });
    }
  }
};
</script>
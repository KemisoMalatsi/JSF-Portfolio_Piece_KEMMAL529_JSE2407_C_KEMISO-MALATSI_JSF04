import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        // Fetch products from an API or other source
        this.products = await fetchProductsAPI();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});

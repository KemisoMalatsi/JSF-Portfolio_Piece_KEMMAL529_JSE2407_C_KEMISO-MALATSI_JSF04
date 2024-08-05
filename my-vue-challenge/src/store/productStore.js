import { defineStore } from 'pinia';
import { getCategories, fetchSingleProduct } from '../api/api';  // Update the import path

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
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        this.products = await response.json();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchSingleProduct(id) {
      this.loading = true;
      try {
        const { response, error } = await fetchSingleProduct(id);
        if (error) {
          throw error;
        }
        return response;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});

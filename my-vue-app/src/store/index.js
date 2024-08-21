// src/store/index.js

import { createStore } from 'vuex'; // Ensure this line is present

const store = createStore({
  state: {
    products: [],
    cart: [],
    wishlist: [],
    isLoggedIn: false,
    theme: localStorage.getItem('theme') || 'light', // default theme
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    addToWishlist(state, product) {
      state.wishlist.push(product);
    },
    removeFromWishlist(state, productId) {
      state.wishlist = state.wishlist.filter(product => product.id !== productId);
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      commit('setProducts', products);
    }
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    wishlist: (state) => state.wishlist,
    isLoggedIn: (state) => state.isLoggedIn,
    theme: (state) => state.theme,
  }
});

export default store;

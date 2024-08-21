import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: [],
    isLoggedIn: false,
    theme: localStorage.getItem('theme') || 'light',
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem('cart');
    },
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
    cartItemCount: (state) => state.cart.length,
  }
});

export default store;

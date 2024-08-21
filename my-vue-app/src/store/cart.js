import { createStore } from 'vuex';
import jwtDecode from 'jwt-decode';

const store = createStore({
  state: {
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: [],
    isLoggedIn: false,
    theme: localStorage.getItem('theme') || 'light',
    userId: null, // Store the decoded user ID
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1, userId: state.userId });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const cartItem = state.cart.find(item => item.id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
        if (quantity === 0) {
          state.cart = state.cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem('cart');
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
      if (!status) {
        state.userId = null;
        state.cart = [];
        localStorage.removeItem('cart');
      }
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    },
    setUserId(state, token) {
      const decodedToken = jwtDecode(token);
      state.userId = decodedToken.userId;
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
    cart: (state) => state.cart.filter(item => item.userId === state.userId),
    cartItemCount: (state) => state.cart.reduce((count, item) => count + item.quantity, 0),
    cartTotalCost: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
    wishlist: (state) => state.wishlist,
    isLoggedIn: (state) => state.isLoggedIn,
    theme: (state) => state.theme,
  }
});

export default store;

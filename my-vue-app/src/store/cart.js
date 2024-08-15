import { createStore } from 'vuex';
import * as jwtDecode from 'jwt-decode';  // Importing the entire module

const store = createStore({
  state() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      comparisonList: JSON.parse(localStorage.getItem('comparisonList')) || [],
      userId: null,
      isLoggedIn: false,
    };
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(
        (item) => item.id === product.id && item.userId === state.userId
      );
      const quantityToAdd = product.quantity || 1; // Default quantity to 1 if not provided
      if (existingProduct) {
        existingProduct.quantity += quantityToAdd;
      } else {
        state.cart.push({ ...product, userId: state.userId, quantity: quantityToAdd });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(
        (item) => !(item.id === productId && item.userId === state.userId)
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCartQuantity(state, { productId, quantity }) {
      const product = state.cart.find(
        (item) => item.id === productId && item.userId === state.userId
      );
      if (product) {
        product.quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = state.cart.filter((item) => item.userId !== state.userId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    logout(state) {
      state.userId = null;
      state.isLoggedIn = false;
      localStorage.removeItem('jwt');
      state.cart = [];
      localStorage.removeItem('cart');
    },
  },
  getters: {
    cartItems(state) {
      return state.cart.filter((item) => item.userId === state.userId);
    },
    cartItemCount(state, getters) {
      return getters.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    },
    cartTotal(state, getters) {
      return getters.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ).toFixed(2);
    },
  },
  actions: {
    initializeUserId({ commit }) {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode(token);  // No need to use .default
        commit('setUserId', decoded.userId);
        commit('setIsLoggedIn', true);
      }
    },
  },
});

export default store;

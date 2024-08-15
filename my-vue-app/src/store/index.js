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
      const quantityToAdd = Number(product.quantity) || 1; // Ensure quantity is a number, default to 1
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
        product.quantity = Number(quantity); // Ensure the updated quantity is a number
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
        (acc, item) => acc + Number(item.price) * item.quantity, // Ensure price is a number
        0
      ).toFixed(2);
    },
  },
  actions: {
    initializeUserId({ commit }) {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode(token);
        commit('setUserId', decoded.userId);
        commit('setIsLoggedIn', true);
      }
    },
  },
});

export default store;

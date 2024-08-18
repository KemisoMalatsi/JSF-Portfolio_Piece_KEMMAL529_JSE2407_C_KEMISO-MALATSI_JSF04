import { createStore } from 'vuex';
import * as jwtDecode from 'jwt-decode';

const store = createStore({
  state() {
    return {
      userId: null,
      isLoggedIn: false,
      cart: [],
      wishlist: [],
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
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    }
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
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
  },
});

export default store;

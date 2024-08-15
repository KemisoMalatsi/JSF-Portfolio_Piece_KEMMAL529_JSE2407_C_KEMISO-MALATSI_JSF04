import { createStore } from 'vuex';
import * as jwtDecode from 'jwt-decode';


export default createStore({
  state() {
    return {
      cart: [],
      userId: null
    };
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id && item.userId === state.userId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1, userId: state.userId });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId || item.userId !== state.userId);
    }
  },
  actions: {
    initializeUserId({ commit }) {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode(token);
        commit('setUserId', decoded.userId);  // Assuming the JWT contains a userId
      }
    }
  },
  getters: {
    cartItems(state) {
      return state.cart.filter(item => item.userId === state.userId);
    }
  }
});

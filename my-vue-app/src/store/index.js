import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
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
    logout(state) {
      state.userId = null;
      state.isLoggedIn = false;
      state.cart = [];
      state.wishlist = [];
      localStorage.removeItem('jwt');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addToWishlist(state, product) {
      if (!state.wishlist.find(item => item.id === product.id)) {
        state.wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromWishlist(state, productId) {
      state.wishlist = state.wishlist.filter(item => item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
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
  getters: {
    cartItems(state) {
      return state.cart;
    },
    wishlistItems(state) {
      return state.wishlist;
    },
    cartItemCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
});
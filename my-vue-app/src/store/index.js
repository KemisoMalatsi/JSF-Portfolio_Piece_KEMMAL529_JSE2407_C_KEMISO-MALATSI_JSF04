import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
      wishlist: [], // Assuming you might also have a wishlist
    };
  },
  mutations: {
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
    },
    addToWishlist(state, product) {
      if (!state.wishlist.find(item => item.id === product.id)) {
        state.wishlist.push(product);
      }
    },
    removeFromWishlist(state, productId) {
      state.wishlist = state.wishlist.filter(item => item.id !== productId);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    addToWishlist({ commit }, product) {
      commit('addToWishlist', product);
    },
    removeFromWishlist({ commit }, productId) {
      commit('removeFromWishlist', productId);
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    wishlistItems(state) {
      return state.wishlist;
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
});

export default store;

import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: [],
    wishlist: [],
    isLoggedIn: false
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
    isLoggedIn: (state) => state.isLoggedIn
  }
});

export default store;
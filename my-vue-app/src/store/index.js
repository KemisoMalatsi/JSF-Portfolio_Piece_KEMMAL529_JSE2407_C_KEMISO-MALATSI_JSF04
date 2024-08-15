import { createStore } from 'vuex';
import * as jwtDecode from 'jwt-decode';

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
    addToComparisonList(state, product) {
      if (state.comparisonList.length < 4) { // Limit to 4 items for a manageable table width
        const existingProduct = state.comparisonList.find(
          (item) => item.id === product.id && item.userId === state.userId
        );
        if (!existingProduct) {
          state.comparisonList.push({ ...product, userId: state.userId });
          localStorage.setItem('comparisonList', JSON.stringify(state.comparisonList));
        }
      } else {
        alert('You can only compare up to 4 products.');
      }
    },
    removeFromComparisonList(state, productId) {
      state.comparisonList = state.comparisonList.filter(
        (item) => !(item.id === productId && item.userId === state.userId)
      );
      localStorage.setItem('comparisonList', JSON.stringify(state.comparisonList));
    },
    clearComparisonList(state) {
      state.comparisonList = state.comparisonList.filter((item) => item.userId !== state.userId);
      localStorage.setItem('comparisonList', JSON.stringify(state.comparisonList));
    }
  },
  getters: {
    comparisonItems(state) {
      return state.comparisonList.filter((item) => item.userId === state.userId);
    }
  },
  actions: {
    initializeUserId({ commit }) {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode.default(token);
        commit('setUserId', decoded.userId);
        commit('setIsLoggedIn', true);
      }
    }
  }
});

export default store;

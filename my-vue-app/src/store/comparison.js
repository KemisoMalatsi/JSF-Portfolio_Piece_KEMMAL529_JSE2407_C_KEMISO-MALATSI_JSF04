// src/store/comparison.js
export default {
    state() {
      return {
        comparisonList: [],
      };
    },
    mutations: {
      addToComparison(state, product) {
        if (!state.comparisonList.find(item => item.id === product.id)) {
          state.comparisonList.push(product);
        }
      },
      removeFromComparison(state, productId) {
        state.comparisonList = state.comparisonList.filter(item => item.id !== productId);
      },
      clearComparison(state) {
        state.comparisonList = [];
      },
    },
    getters: {
      comparisonItems(state) {
        return state.comparisonList;
      },
    },
  };
  
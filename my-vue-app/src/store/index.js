import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,  // Authentication state
  },
  mutations: {
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;  // Update authentication state
    },
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('jwt', token);  // Store JWT in local storage
      commit('setIsLoggedIn', true);  // Set state to logged in
    },
    logout({ commit }) {
      localStorage.removeItem('jwt');  // Remove JWT from local storage
      commit('setIsLoggedIn', false);  // Set state to logged out
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,  // Getter to access login state
  }
});

export default store;

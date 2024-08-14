<template>
  <div id="app">
    <Header @toggle-login="showLogin = !showLogin" />
    <router-view></router-view> <!-- Display routed components -->
    <Login v-if="showLogin" @login="handleLogin" @cancel="showLogin = false" />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue';
import Login from '../src/components/Login.vue';
import * as jwtDecode from 'jwt-decode';  // Importing the entire module

export default {
  components: {
    Header,
    Login
  },
  data() {
    return {
      showLogin: false, 
    };
  },
  methods: {
    handleLogin() {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode.default(token);  // Use .default to access the function
        this.$store.commit('setUserId', decoded.userId); // Store the user ID in Vuex
        this.$store.commit('setIsLoggedIn', true); // Mark user as logged in
        const redirectPath = this.$route.query.redirect || '/'; // Default to home if no redirect
        this.$router.push(redirectPath);
        this.showLogin = false;
      }
    }
  },
  mounted() {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decoded = jwtDecode.default(token);  // Use .default to access the function
      this.$store.commit('setUserId', decoded.userId); // Set the user ID when the app is mounted
      this.$store.commit('setIsLoggedIn', true); // Mark user as logged in
    }
  }
};
</script>

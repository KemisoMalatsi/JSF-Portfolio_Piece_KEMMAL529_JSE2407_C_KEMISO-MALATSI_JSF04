<template>
  <div :class="{ 'dark': isDarkMode }" id="app">
    <!-- Pass isAuthenticated and handleLogout as props to the Header component -->
    <Header 
      :isAuthenticated="isAuthenticated" 
      @toggle-login="showLogin = !showLogin" 
      @logout="logout"
      @toggle-dark-mode="toggleDarkMode"
    />
    <router-view></router-view> <!-- Display routed components -->

    <!-- Login Modal -->
    <Login
      v-if="showLogin"
      @login="handleLogin"
      @cancel="showLogin = false"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Login from './components/Login.vue';

export default {
  components: {
    Header,
    Login
  },
  data() {
    return {
      showLogin: false, // Controls the visibility of the login modal
      isAuthenticated: false, // Tracks if the user is authenticated
      isDarkMode: false // Tracks if dark mode is enabled
    };
  },
  mounted() {
    // Check if the user is already logged in by verifying the token in localStorage
    this.isAuthenticated = !!localStorage.getItem('token');

    // Check the user's dark mode preference from localStorage
    this.isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

    // Apply dark mode globally if enabled
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  },
  methods: {
    handleLogin() {
      this.isAuthenticated = true; 
      this.$router.push(this.$route.query.redirect || '/'); 
      this.showLogin = false; 
    },
    logout() {
      localStorage.removeItem('token'); 
      this.isAuthenticated = false; 
      this.$router.push('/'); 
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; 
      localStorage.setItem('darkMode', this.isDarkMode); 
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }
  }
};
</script>

<style>
/* Add any global styles here if necessary */
</style>

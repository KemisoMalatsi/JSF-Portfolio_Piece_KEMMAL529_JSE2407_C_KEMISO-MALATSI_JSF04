
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
      this.$store.commit('setIsLoggedIn', true); // Mark user as logged in
      const redirectPath = this.$route.query.redirect || '/'; // Default to home if no redirect
      this.$router.push(redirectPath);
      this.showLogin = false;
    }
  }
};
</script>

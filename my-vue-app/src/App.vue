<template>
  <div id="app">
    <Header @toggle-login="showLogin = !showLogin" />
    <router-view></router-view> <!-- Display routed components -->
    <Login v-if="showLogin" @login="handleLogin" @cancel="showLogin = false" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Login from '../src/components/Login.vue';

export default {
  components: {
    Header,
    Login
  },
  data() {
    return {
      showLogin: false, // Set to false initially
    };
  },
  methods: {
    handleLogin() {
      this.$router.push('/product-list'); // Navigate to product list on login
      this.showLogin = false;
    }
  }
};
</script>
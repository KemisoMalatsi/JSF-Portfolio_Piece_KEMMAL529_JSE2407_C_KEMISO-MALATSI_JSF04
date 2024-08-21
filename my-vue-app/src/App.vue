<template>
  <div id="app">
    <Header :cartItemCount="cartItemCount" @toggle-login="showLogin = !showLogin" @logout="handleLogout" />
    <router-view></router-view> <!-- Display routed components -->
    <Login v-if="showLogin" @login="handleLogin" @cancel="showLogin = false" />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue';
import Login from '../src/components/Login.vue';
import * as jwtDecode from 'jwt-decode';

export default {
  components: {
    Header,
    Login,
  },
  data() {
    return {
      showLogin: false,
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    handleLogin() {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode(token);
        this.$store.commit('setUserId', decoded.userId);
        this.$store.commit('setIsLoggedIn', true);
        const redirectPath = this.$route.query.redirect || '/';
        this.$router.push(redirectPath);
        this.showLogin = false;
      }
    },
    handleLogout() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
  },
  mounted() {
    this.$store.dispatch('initializeUserId');
  },
};
</script>

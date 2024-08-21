<template>
  <div id="app">
    <Header :cartItemCount="cartItemCount" @toggle-login="showLogin = !showLogin" />
    <router-view></router-view> <!-- Display routed components -->
    <Login v-if="showLogin" @login="showLogin = false" @cancel="showLogin = false" />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue';
import Login from '../src/components/Login.vue';

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
};
</script>

<style scoped>
/* Add any global styles here if necessary */
</style>

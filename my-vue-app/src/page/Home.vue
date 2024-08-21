<template>
  <div>
    <ProductList @select-product="selectProduct" />
    <Login v-if="showLogin" @login="handleLogin" @cancel="showLogin = false" />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import Login from '../components/Login.vue';

export default {
  components: {
    ProductList,
    Login
  },
  data() {
    return {
      /**
       * Indicates whether the login modal is visible.
       * @type {boolean}
       */
      showLogin: false
    };
  },
  methods: {
    /**
     * Handles the login process by setting the logged-in state to true
     * and hiding the login modal.
     */
    handleLogin() {
      this.$store.commit('setIsLoggedIn', true);
      this.showLogin = false;
    },
    /**
     * Handles the selection of a product by navigating to the product details page.
     * @param {Object} product - The selected product.
     */
    selectProduct(product) {
      this.$router.push({ name: 'ProductDetails', params: { id: product.id } });
    }
  }
};
</script>
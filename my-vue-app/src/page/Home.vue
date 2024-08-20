
<template>
  <div>
    <ProductList @select-product="selectProduct" />
    <Login v-if="showLogin" @login="handleLogin" @cancel="showLogin = false" />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import Login from '../../src/components/Login.vue';

export default {
  components: {
    ProductList,
    Login
  },
  data() {
    return {
      showLogin: false
    };
  },
  methods: {
    handleLogin() {
      this.$store.commit('setIsLoggedIn', true);
      this.showLogin = false;
    },
    selectProduct(product) {
      this.$router.push({ name: 'ProductDetails', params: { id: product.id } });
    }
  }
};
</script>
<template>
    <div>
      <ProductList @select-product="selectProduct" />
      <LoginModal v-if="showLoginModal" @login="handleLogin" @cancel="showLoginModal = false" />
    </div>
  </template>
  
  <script>
  import ProductList from '../components/ProductList.vue';
  import LoginModal from '../components/LoginModal.vue';
  
  export default {
    components: {
      ProductList,
      LoginModal
    },
    data() {
      return {
        showLoginModal: false
      };
    },
    methods: {
      handleLogin() {
        this.$store.commit('setIsLoggedIn', true);
        this.showLoginModal = false;
      },
      selectProduct(product) {
        this.$router.push({ name: 'ProductDetails', params: { id: product.id } });
      }
    }
  };
  </script>
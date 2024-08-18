<template>
    <div class="confirmation-container">
      <h1>Thank you for your purchase!</h1>
      <p>Your payment was successful.</p>
      <router-link to="/">Return to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Here you could trigger any actions to save the order details in your database
    },
  };
  </script>
  
  <style scoped>
  .confirmation-container {
    padding: 20px;
    text-align: center;
  }
  </style>
  
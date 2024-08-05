<template>
  <div id="app">
    <Header />
    <!-- Add a router-view here if you are using routing -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '../src/components/Header.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

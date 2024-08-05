<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello, Vite + Vue!')

const changeMessage = () => {
  message.value = 'Hello, Composition API!'
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>

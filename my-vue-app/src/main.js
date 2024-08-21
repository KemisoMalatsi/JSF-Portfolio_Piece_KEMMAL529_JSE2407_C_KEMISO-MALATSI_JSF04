// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index'; // Import Vuex store
import './assets/tailwind.css';

// Polyfill for process (if needed)
import process from 'process';
window.process = process;

createApp(App)
  .use(router)
  .use(store) // Use the Vuex store
  .mount('#app');

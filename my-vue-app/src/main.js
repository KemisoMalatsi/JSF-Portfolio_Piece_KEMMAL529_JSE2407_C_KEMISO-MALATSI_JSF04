import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/tailwind.css';
import store from './store/index'; // import Vuex store

// Polyfill for process
import process from 'process';
window.process = process;

createApp(App)
  .use(router)
  .use(store) // use Vuex store
  .mount('#app');

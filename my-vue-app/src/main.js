import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index'; // import Vuex store
import Cart from './views/Cart.vue';
import Wishlist from './views/Wishlist.vue';
import './assets/index.css'; // Ensure this path is correct


// Polyfill for process
import process from 'process';
window.process = process;



createApp(App)
  .use(router)
  .use(store) // use Vuex store
  .mount('#app');
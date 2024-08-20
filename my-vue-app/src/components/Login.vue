<template>
  <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block mb-2">Username</label>
          <input type="text" id="username" v-model="username" class="w-full p-2 border rounded">
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="w-full p-2 border rounded" />
            <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 px-3 py-2">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>
        <div v-if="isLoading" class="loading-spinner mb-4">
          Authenticating...
        </div>
        <div class="flex justify-end">
          <button type="button" @click="$emit('cancel')" class="bg-gray-200 text-gray-800 py-2 px-4 rounded mr-2">Cancel</button>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '', 
      password: '',
      showPassword: false,
      isLoading: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    login() {
      if (!this.username || !this.password) {
        alert('Please enter your username and password.');
        return;
      }

      this.isLoading = true;

      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
      .then(res => res.json())
      .then(data => {
        this.isLoading = false;
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          this.$emit('login'); // Inform the parent that login is successful
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        this.isLoading = false;
        alert('An error occurred during login.');
      });
    }
  }
};
</script>

<style scoped>
.loading-spinner {
  text-align: center;
  color: #3b82f6; /* Tailwind blue-500 */
}
</style>
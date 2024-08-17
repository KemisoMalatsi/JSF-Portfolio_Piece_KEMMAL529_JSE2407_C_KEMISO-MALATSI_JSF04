<template>
    <div class="checkout-container">
      <h1>Checkout</h1>
      <div class="payment-method">
        <label>
          <input type="radio" v-model="paymentMethod" value="paypal" />
          Pay with PayPal
        </label>
      </div>
  
      <div v-if="paymentMethod === 'paypal'">
        <div id="paypal-button-container"></div>
      </div>
  
      <button @click="proceedToPayment" class="checkout-button">Proceed to Payment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentMethod: '',
      };
    },
    methods: {
      proceedToPayment() {
        if (this.paymentMethod === 'paypal') {
          this.initPayPalButton();
        }
      },
      initPayPalButton() {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.cartTotal, // Use the actual total amount from your store
                },
              }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert('Transaction completed by ' + details.payer.name.given_name);
              this.$router.push('/order-confirmation'); // Redirect to the confirmation page
            });
          },
          onCancel: () => {
            alert('Payment was cancelled.');
          },
          onError: (err) => {
            console.error(err);
            alert('An error occurred during payment processing.');
          },
        }).render('#paypal-button-container');
      },
    },
    computed: {
      cartTotal() {
        return this.$store.getters.cartTotal; // Retrieve the total amount from the Vuex store
      },
    },
    mounted() {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_SANDBOX_CLIENT_ID`; // Replace with your actual client ID
      script.addEventListener('load', this.initPayPalButton);
      document.body.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  .checkout-container {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  .payment-method {
    margin-bottom: 20px;
  }
  .checkout-button {
    padding: 10px 20px;
    background-color: #0070ba;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
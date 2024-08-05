<template>
    <header class="sticky z-50 top-0">
      <nav class="bg-gray-500 border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <router-link to="/">
            <button class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/online-shop.png" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                SwiftCart
              </span>
            </button>
          </router-link>
          <button
            @click="toggleNavbar"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
  
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col top-10 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <router-link
                  to=""
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Wishlist
                </router-link>
              </li>
              <router-link to="">
                <li class="hidden lg:block md:block relative">
                  <div class="t-0 absolute left-3 -top-4">
                    <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      2
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: h-6 w-6 stroke-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </li>
              </router-link>
              <li>
                <router-link
                  to=""
                  class="lg:hidden md:hidden py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Cart
                </router-link>
              </li>
  
              <li>
                <router-link
                  to="login"
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Login
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const toggleNavbar = () => {
    const dropDown = document.getElementById('navbar-dropdown');
    dropDown.classList.contains('hidden')
      ? dropDown.classList.remove('hidden')
      : dropDown.classList.add('hidden');
  };
  </script>
  
  <style scoped>
  .sticky {
    position: sticky;
  }
  
  .z-50 {
    z-index: 50;
  }
  
  .top-0 {
    top: 0;
  }
  
  .bg-gray-500 {
    background-color: #6b7280;
  }
  
  .border-gray-200 {
    border-color: #e5e7eb;
  }
  
  .max-w-screen-xl {
    max-width: 1280px;
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .flex {
    display: flex;
  }
  
  .flex-wrap {
    flex-wrap: wrap;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .h-8 {
    height: 2rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .font-semibold {
    font-weight: 600;
  }
  
  .whitespace-nowrap {
    white-space: nowrap;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .inline-flex {
    display: inline-flex;
  }
  
  .w-10 {
    width: 2.5rem;
  }
  
  .h-10 {
    height: 2.5rem;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .md\\:hidden {
    display: none;
  }
  
  .hover\\:bg-gray-100:hover {
    background-color: #f3f4f6;
  }
  
  .focus\\:outline-none:focus {
    outline: 0;
  }
  
  .focus\\:ring-2:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
  
  .focus\\:ring-gray-200:focus {
    box-shadow: 0 0 0 2px #e5e7eb;
  }
  
  .hidden {
    display: none;
  }
  
  .w-full {
    width: 100%;
  }
  
  .md\\:block {
    display: block;
  }
  
  .md\\:w-auto {
    width: auto;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .top-10 {
    top: 2.5rem;
  }
  
  .font-medium {
    font-weight: 500;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .border {
    border-width: 1px;
  }
  
  .border-gray-100 {
    border-color: #f3f4f6;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .bg-gray-500 {
    background-color: #6b7280;
  }
  
  .md\\:space-x-8 {
    margin-right: -2rem;
  }
  
  .rtl\\:space-x-reverse {
    direction: rtl;
  }
  
  .md\\:flex-row {
    flex-direction: row;
  }
  
  .md\\:mt-0 {
    margin-top: 0;
  }
  
  .md\\:border-0 {
    border-width: 0;
  }
  
  .block {
    display: block;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  .hover\\:bg-gray-100:hover {
    background-color: #f3f4f6;
  }
  
  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }
  
  .md\\:border-0 {
    border-width: 0;
  }
  
  .md\\:hover\\:text-blue-700:hover {
    color: #1d4ed8;
  }
  
  .md\\:p-0 {
    padding: 0;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .left-3 {
    left: 0.75rem;
  }
  
  .-top-4 {
    top: -1rem;
  }
  
  .flex {
    display: flex;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .rounded-full {
    border-radius: 9999px;
  }
  
  .bg-red-500 {
    background-color: #ef4444;
  }
  
  .p-3 {
    padding: 0.75rem;
  }
  
  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  
  .stroke-white {
    stroke: #ffffff;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  .hidden\\:lg\\:block {
    display: none;
  }
  
  .md\\:hidden\\:lg\\:block {
    display: none;
  }
  
  .hidden\\:md\\:block {
    display: none;
  }
  
  .lg\\:hidden {
    display: none;
  }
  
  .md\\:hidden {
    display: none;
  }
  </style>
  
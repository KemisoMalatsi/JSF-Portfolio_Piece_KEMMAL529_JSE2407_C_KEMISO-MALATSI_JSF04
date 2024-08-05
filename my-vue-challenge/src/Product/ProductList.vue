<template>
  <div class="grid justify-center">
    <div class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
      <ProductCard
        id="1"
        title="Sample Product"
        image=""
        price="10"
        rating="4"
        category="Sample Category"
      />
      <CardSkeleton v-for="(_, index) in 4" :key="index" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import CardSkeleton from './CardSkeleton.vue';
</script>

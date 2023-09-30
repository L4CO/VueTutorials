<script setup>
  console.log('vue via vite');
  import { ref } from "vue";

  const count = ref(0);

  function increment(){
    count.value++;
    };
</script>

<template>
  <button @click="increment">count is : {{ count }}</button>
</template>

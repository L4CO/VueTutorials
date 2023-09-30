<script setup>
  console.log('vue via vite');
  import { ref } from "vue";

  const text = ref(''); 

</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>

<script setup>
  console.log('vue via vite');
  import { ref } from "vue";

  const awesome = ref( false );

  function toggle(){
    awesome.value = !awesome.value;
    }

</script>

<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<script setup>
  console.log('vue via vite');
  import { ref } from "vue";

  let id = 0;
  const newTodo = ref('');

  const todos = ref([
    { id: id++, text: 'Learn HTML' },
    { id: id++, text: 'Learn JavaScript' },
    { id: id++, text: 'Learn Vue' }
  ]);

  function addTodo(){
      todos.value.push({ id: id++, text: newTodo.value });
      newTodo.value = '';
    }

  function removeTodo(foundTodo){
	todos.value = todos.value.filter((item) => item != foundTodo);
    }

</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

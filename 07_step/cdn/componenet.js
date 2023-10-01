import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {

  setup() {
    console.log('vue from CDN');
    
    let id = 0;

    const newTodo = ref('');
    const todos = ref([
      { id: id++, text: 'Learn HTML' },
      { id: id++, text: 'Learn JavaScript' },
      { id: id++, text: 'Learn Vue' } ]);

    function addTodo(){ 
      console.log('function addTodo() triggered');
      todos.value.push({ id: id++ , text: newTodo.value });
      newTodo.value = '';
    };

    function removeTodo(todo){ 
      console.log('function removeTod() triggered');
      todos.value = todos.value.filter((t) => t !== todo);
    };

    return {
      addTodo,
      newTodo,
      removeTodo,
      todos
    }
  }
}

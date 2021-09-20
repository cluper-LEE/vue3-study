<script>
export default {
  name: "TodoListContainer",
};
</script>
<script setup>
import { ref, readonly, provide } from "vue ";
import { useStorage } from "../compositions/storage";
import TodoListMain from "./TodoListMain.vue";
import TodoListNew from "./TodoListNew.vue";

const todos = ref([]);
const { loadTodos, saveTodos, storage_id } = useStorage();

provide("todos", readonly(todos)); // 자식 컴포넌트에서는 직접 변경할 수 없음. 대신 변경할 수 있는 method도 같이 전달

const initTodos = (init_todos) => {
  todos.value = init_todos;
};

const addTodo = (job, date) => {
  todos.value.push({
    id: storage_id.value++,
    job: job,
    date: date,
    completed: false,
  });
  saveTodos(todos);
};
const removeTodo = (id) => {
  todos.value.splice(id, 1);
  todos.value.forEach((todo, idx) => {
    // id 재설정
    todo.id = idx;
  });
};
const setCompleted = (id, bool) => {
  todos.value.find((todo) => todo.id == id).completed = bool;
  saveTodos(todos);
};
const completeTodo = (id) => {
  setCompleted(id, true);
};

provide("addTodo", addTodo);
provide("removeTodo", removeTodo);
provide("completeTodo", completeTodo);
provide("setCompleted", setCompleted);

loadTodos(initTodos);
</script>

<template>
  <todo-list-new></todo-list-new>
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main></todo-list-main>
    </div>
  </section>
</template>

<style scoped>
</style>
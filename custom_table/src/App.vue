<script setup>
import MyTable from "./components/MyTable.vue";
import { ref } from "vue";
const header = ref(["1번 제목", "2번 제목"]);
const rows = ref([
  [{ data: "1번 내용" }, { data: "2번 내용" }],
  [{ data: "1번 내용2", colspan: 2 }],
  [{ data: "1번 내용3", rowspan: 3 }, { data: "2번 내용3" }],
  [{ data: "2번 내용4" }],
  [{ data: "2번 내용5" }],
]);
</script>

<template>
  <my-table :header="header" :rows="rows"></my-table>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

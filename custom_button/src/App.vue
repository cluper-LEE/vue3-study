<script setup>
import MyButton from "./components/MyButton.vue";
import { computed, ref, watch } from "vue";
const onClick = (e) => {
  alert("clicked");
};
const active = ref(true);
watch(active, (curr, prev) => {
  console.log(curr, prev);
});
</script>

<template>
  <MyButton sm>My Button</MyButton>
  <MyButton>My Button</MyButton>
  <MyButton lg background-white>My Button</MyButton>
  <MyButton md pill text-green background-pink>My Button</MyButton>
  <MyButton lg pill @click.prevent="onClick">My Button</MyButton>
  <MyButton type="switch" background-blue text-white v-model:active="active"
    >SWITCH</MyButton
  >
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

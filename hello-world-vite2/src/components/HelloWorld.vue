<script setup>
import { computed, reactive, ref, watch } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const onClick = () => {
  count.value++;
};
const com = computed(() => count.value + 2);
const items = reactive({
  a: "A",
  b: "B",
});
const addItem = () => {
  if (items.b == "B") items.b = "C";
  else items.b = "B";
};

watch(
  items,
  async (curr, prev) => {
    console.log(`${JSON.stringify(curr)} <= ${JSON.stringify(prev)}`);
  },
  { deep: true }
);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="onClick">count is: {{ count }}</button>
  <p>{{ com }}</p>
  <ol @click="addItem">
    <li v-for="(value, key, index) in items" :key="index">
      {{ index }} {{ key }} {{ value }}
    </li>
  </ol>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

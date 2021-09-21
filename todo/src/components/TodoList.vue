<script>
export default {
  name: "TodoList",
};
</script>

<script setup>
import { inject, ref } from "vue";
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const removeTodo = inject("removeTodo");
const completeTodo = inject("completeTodo");
const setCompleted = inject("setCompleted");
const today = inject("today");
const menu = [
  {
    str: "할 일 삭제",
    func: removeTodo,
  },
  {
    str: "할 일 완료",
    func: completeTodo,
  },
];
const checkedList = ref([]);
const onClickCheckbox = (e, id) => {
  if (e.target.checked) {
    checkedList.value.push(id);
  } else {
    const idx = checkedList.value.findIndex((checked_id) => checked_id == id);
    checkedList.value.splice(idx, 1);
  }
};
const onClickCompleteChecked = () => {
  checkedList.value.forEach((id) => completeTodo(id));
};
const onClickIncompleteChecked = () => {
  checkedList.value.forEach((id) => setCompleted(id, false));
};
const onClickDeleteChecked = () => {
  checkedList.value.forEach((id) => removeTodo(id));
};

const onCLickCompleteCheckbox = (e, id) => {};
</script>

<template>
  <main>
    <div class="btn-group">
      <button class="btn btn-secondary" @click="onClickCompleteChecked">
        완료
      </button>
      <button class="btn btn-secondary" @click="onClickIncompleteChecked">
        미완료
      </button>
      <button class="btn btn-secondary" @click="onClickDeleteChecked">
        삭제
      </button>
    </div>
    <div v-for="(todo, idx) in props.data" :key="todo.id">
      <div class="input-group my-2 input-group-sm">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            :checked="false"
            @click="onClickCheckbox($event, todo.id)"
          />
        </div>
        <div class="input-group-text">
          <input
            type="date"
            class="form-input mt-0"
            :min="today"
            disabled
            :value="todo.date"
          />
        </div>
        <input type="text" class="form-control" :value="todo.job" />

        <button
          class="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          할 일 관리
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for="item in menu" :key="item.str">
            <a class="dropdown-item" @click="item.func(todo.id)">{{
              item.str
            }}</a>
          </li>
        </ul>
      </div>
      <div
        v-show="idx + 1 < data.length"
        class="col border border-second"
      ></div>
    </div>
  </main>
</template>
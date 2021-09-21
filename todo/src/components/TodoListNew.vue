<script>
export default {
  name: "TodoListNew",
};
</script>

<script setup>
import { inject, reactive, toRefs } from "vue";

const today = inject("today");
const addTodo = inject("addTodo");
const val_obj = reactive({
  job: "",
  date: today,
  today: today,
});

const onAddTodo = () => {
  if (val_obj.job.length > 0) {
    addTodo(val_obj.job, val_obj.date);
    val_obj.job = "";
    val_obj.date = "";
  }
};

const { job, date } = toRefs(val_obj);
</script>

<template>
  <section class="mb-5">
    <div class="container">
      <div class="row justify-content-center m-2">
        <div class="col border border-primary rounded">
          <input
            type="text"
            class="form-control my-2"
            v-model="job"
            placeholder="할 일을 적으세요"
          />

          <div class="row my-2">
            <div class="col-6">
              <input type="date" v-model="date" :min="today" />
            </div>
            <div class="col-6">
              <button
                class="btn btn-primary btn-sm float-end"
                type="button"
                @click="onAddTodo"
              >
                작업추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
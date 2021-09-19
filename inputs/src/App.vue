<script setup>
import { reactive } from "vue";
const _result = {
  name: "",
  age: 0,
  gender: "male",
  hobby: ["스포츠"],
  password: "",
  country: "대한민국",
  date: "",
  time: "",
  color: "#112121",
  range: 0,
};
const country_options = ["대한민국", "미국", "중국"];
const hobby_options = ["스포츠", "그림", "음악", "코딩"];

const result = reactive(_result);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" /><br />
  <label>이름: </label>
  <input type="text" v-model="result.name" /><br />
  <label>나이 :</label>
  <input type="number" v-model="result.age" /><br />
  <label for="">성별: </label>
  <label for="">남성</label>
  <input type="radio" name="gender" v-model="result.gender" value="male" />
  <label for="">여성</label>
  <input
    type="radio"
    name="gender"
    v-model="result.gender"
    value="female"
  /><br />
  <label for="">취미: </label>
  <span v-for="hobby in hobby_options" :key="hobby">
    <label for="">{{ hobby }}</label>
    <input type="checkbox" v-model="result.hobby" v-bind:value="hobby" /> </span
  ><br />
  <label for="">비번: </label>
  <input type="password" v-model="result.password" /><br />
  <label for="">국가: </label>
  <select v-model="result.country">
    <option v-for="country in country_options" :key="country">
      {{ country }}
    </option></select
  ><br />
  <label for="">날짜: </label>
  <input type="date" v-model="result.date" /><br />
  <label for="">시간: </label>
  <input type="time" v-model="result.time" /><br />
  <label for="">색깔: </label>
  <input type="color" v-model="result.color" /><br />
  <label for="">범위: </label>
  <input type="range" v-model="result.range" />
  <div>
    <h3>결과</h3>
    <hr />
    {{ result }}
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

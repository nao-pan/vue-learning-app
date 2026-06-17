<script setup>
import { ref } from 'vue'
const isRed = ref(true)
const isBgBlue = ref(true)
const className = ref('red')
function toggleClass() {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
}
</script>

<template>
  <div class="border" :class="[className, { 'bg-blue': isBgBlue }]">Hello</div>
  <button @click="toggleClass">toggle</button>

  <!-- styleはCSSのプロパティ名と値をキーバリューで ハイフン区切りはキャメルケースに変更可 -->
  <div :style="{ color: 'red', backgroundColor: 'blue' }">Hello</div>
</template>

<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red;
}
</style>

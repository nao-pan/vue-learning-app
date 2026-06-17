<script setup>
import { ref } from 'vue'
const count = ref(0)
const count2 = ref(0)
const eventName = 'keyup'
const userInput = ref('')
</script>

<template>
  <p>{{ count }}</p>
  <input type="text" @keyup="count++" />

  <!-- 特定のキーのみをターゲットにする -->
  <p>{{ count2 }}</p>
  <input type="text" @keyup.space.delete="count2++" />

  <!-- 動的な引数の割り当て -->
  <p>{{ count2 }}</p>
  <input type="text" @[eventName].space.delete="count2++" />

  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text" />
</template>

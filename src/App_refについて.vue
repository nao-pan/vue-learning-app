<script setup>
import { ref, reactive } from 'vue'
const title = 'Vue.js course'
let price = ref(9.99)
function increment() {
  price.value += 1
  instructor.age += 1
}
const info = ref({
  students: 1000,
  rating: 4,
})
const instructor = reactive({
  name: 'Nao',
  age: 35,
  sns: {
    x: 'nao',
    youtube: 'naoyu',
  },
})

instructor.bio = 'hello'
console.log(instructor.sns)
console.log(info.value.students)
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
</template>
<style></style>

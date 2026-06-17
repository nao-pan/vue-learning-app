<script setup>
import { ref, watch, watchEffect } from 'vue'
const count = ref(0)
const count3 = ref({ a: 0 })

// 第一引数に監視対象、第二引数に監視対象更新時の処理
watch(count, (newValue, oldValue) => {
  console.log('watch')
  console.log(newValue)
  console.log(oldValue)
})
// 第一引数に関数を指定することも可能、返り値に監視対象を指定する必要あり
// 配列で複数指定も可能
watch(
  () => {
    console.log('watch first argument')
    return count3.value.a
  },
  (newValue, oldValue) => {
    console.log('watch')
    console.log(newValue)
    console.log(oldValue)
  },
  {
    immediate: true,
  },
)

// 引数に処理
watchEffect(() => {
  console.log('watchEffect')

  // 下の1行でcount.valueにアクセスしているため、監視対象に追加されている
  console.log(count.value)

  setTimeout(() => {
    console.log('after 1 second')
    // 非同期処理の中でのアクセスでも監視対象に追加されない
    console.log(count.value)
  }, 1000)

  // 下の文では書き込みのみでアクセスとはみなされないため監視対象には追加されない
  count.value = 'hello'
})
</script>

<template>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>

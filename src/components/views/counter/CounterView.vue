<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}

const status = computed(() => {
  if (count.value > 0) {
    return 'プラス'
  }

  if (count.value < 0) {
    return 'マイナス'
  }

  return 'ゼロ'
})
</script>

<template>
  <div>
    <h1>カウンター</h1>

    <p>現在の値: {{ count }}</p>
    <p>状態: {{ status }}</p>

    <button @click="increment">+</button>

    <button @click="decrement">-</button>

    <button @click="reset">リセット</button>

    <br />
    <br />

    <RouterLink to="/"> TOPへ戻る </RouterLink>
  </div>
</template>

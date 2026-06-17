<script setup>
import { ref, computed } from 'vue'
const score = ref(0)
// computedでは関数内の変数を確認し、変化があった場合に関数を再実行する
const evaluation = computed(() => {
  // score.value = 0 のように値を変える処理は非推奨 read only
  // setTimeout(() => {}, 1000) 非同期処理も非推奨

  // score.valueはrefオブジェクトなのでcomputedは値に変化がないか監視している
  return score.value > 3 ? 'Good' : 'Bad'

  // データをまとめて返すような使い方が主
})
// evaluation.value = 'hello' のようには使えない
</script>

<template>
  <!-- template内では変化を検知すると再レンダリングする処理が走る -->
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ score }}</p>
  <button @click="score++">+1</button>
</template>

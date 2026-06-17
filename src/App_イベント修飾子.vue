<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event, times) {
  console.log(event)
  count.value = event.clientX * times
}
</script>

<template>
  <p>{{ count }}</p>
  <button v-on:click="count++">button</button>
  <!-- 以下は省略記法 -->
  <button @click="count++">button</button>

  <!-- @イベント種類="ハンドラー(関数or一行の式)" -->
  <button @click="countUp">button</button>

  <!-- イベントオブジェクト -->
  <div>
    <button @click="count = $event.clientX">clientXbutton</button>
  </div>

  <!-- ハンドラーに引数を渡す -->
  <button @click="countUp($event, 5)">button</button>

  <!-- イベント修飾子　省略記法 -->
  <!-- preventDefault=デフォルトの挙動を防ぐ -->
  <button @click="$event.preventDefault()">preventDefault</button>
  <a href="https://vuejs.org" @click.prevent>Vue.js</a>

  <!-- stopPropagation()=親タグへの影響をなくす -->
  <p>{{ count }}</p>
  <div @click="count++">
    <button @click="$event.stopPropagation()">stopPropagation</button>
    <button @click.stop="count = 30">stopPropagation</button>
    <a href="https://vuejs.org" @click.prevent.stop>Vue.js</a>
  </div>
</template>

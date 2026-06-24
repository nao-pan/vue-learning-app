<script setup>
import { useTheme } from '@/composables/useTheme'

const { modeLabel, toggleTheme } = useTheme()
</script>

<template>
  <div>
    <h1>Vue Learning App</h1>
    <p>Vue学習アプリ</p>

    <h2>基礎機能</h2>

    <ul>
      <li>
        <RouterLink to="/counter"> カウンター </RouterLink>
      </li>

      <li>
        <RouterLink to="/calculator"> 電卓 </RouterLink>
      </li>

      <li>
        <RouterLink to="/todo"> ToDoリスト </RouterLink>
      </li>

      <li>
        <RouterLink to="/user">ユーザー一覧</RouterLink>
      </li>
    </ul>

    <h2>UI機能</h2>

    <ul>
      <li>
        <button @click="toggleTheme">{{ modeLabel }}</button>
      </li>


      <li>
        <RouterLink to="/breadcrumb"> パンくずリスト </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style>
.dark {
  background: #222;
  color: white;

  min-height: 100vh;
}
</style>

<script setup>
import { useTheme } from './composables/useTheme'

const { isDarkMode } = useTheme()
</script>
<template>
  <div
    :class="{
      dark: isDarkMode,
    }"
  >
    <routerView />
  </div>
</template>
<style>
.dark {
  background: #222;
  color: white;

  min-height: 100vh;
}
</style>

import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage'

const isDarkMode = useLocalStorage('dark-mode', false)

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
  }

  const modeLabel = computed(() => {
    return isDarkMode.value ? 'ライトモード' : 'ダークモード'
  })

  return {
    isDarkMode,
    modeLabel,
    toggleTheme,
  }
}

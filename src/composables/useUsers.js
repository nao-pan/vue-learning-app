import { computed, ref } from 'vue'

export function useUsers() {
  const username = ref('')
  const users = ref([])
  const loading = ref(false)
  const errorMessage = ref('')

  const noResult = computed(() => {
    return !loading.value && users.value.length === 0
  })

  const fetchUsers = async () => {
    loading.value = true
    errorMessage.value = ''

    try {
      const url = username.value.trim()
        ? `https://jsonplaceholder.typicode.com/users?username=${username.value}`
        : 'https://jsonplaceholder.typicode.com/users'

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('取得失敗')
      }

      users.value = await response.json()
    } catch (error) {
      console.error('ユーザー取得失敗', error)

      errorMessage.value = 'ユーザー取得に失敗しました'
    } finally {
      loading.value = false
    }
  }

  return {
    username,
    users,
    loading,
    errorMessage,
    noResult,
    fetchUsers,
  }
}

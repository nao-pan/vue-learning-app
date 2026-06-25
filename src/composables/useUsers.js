import { ref } from 'vue'

export function useUsers() {
  const users = ref([])
  const loading = ref(false)

  const fetchUsers = async () => {
    loading.value = true
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()

    loading.value = false
  }

  return {
    users,
    loading,
    fetchUsers,
  }
}

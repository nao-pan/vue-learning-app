import { ref } from 'vue'

export function useUsers() {
  const users = ref([])

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  }

  return {
    users,
    fetchUsers,
  }
}

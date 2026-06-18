import { computed, onMounted, ref, watch } from 'vue'
import { FILTER_TYPES } from '@/constants/filterTypes'

export function useTodos() {
  const todoText = ref('')
  const todos = ref([])
  const filterType = ref('all')

  const addTodo = () => {
    if (!todoText.value.trim()) {
      return
    }

    todos.value.push({
      id: Date.now(),
      text: todoText.value,
      completed: false,
    })
    todoText.value = ''
  }

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const filteredTodos = computed(() => {
    switch (filterType.value) {
      case FILTER_TYPES.COMPLETED:
        return todos.value.filter((todo) => todo.completed)
      case FILTER_TYPES.INCOMPLETE:
        return todos.value.filter((todo) => !todo.completed)

      default:
        return todos.value
    }
  })

  const totalCount = computed(() => {
    return todos.value.length
  })

  const completedCount = computed(() => {
    return todos.value.filter((todo) => {
      return todo.completed
    }).length
  })

  const incompleteCount = computed(() => {
    return todos.value.filter((todo) => {
      return !todo.completed
    }).length
  })

  const changeFilter = (type) => {
    filterType.value = type
  }

  watch(
    todos,
    (newTodos) => {
      localStorage.setItem('todos', JSON.stringify(newTodos))
    },
    {
      deep: true,
    },
  )

  onMounted(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      todos.value = JSON.parse(savedTodos)
    }
  })

  return {
    todoText,
    filteredTodos,
    totalCount,
    completedCount,
    incompleteCount,
    addTodo,
    deleteTodo,
    changeFilter,
  }
}

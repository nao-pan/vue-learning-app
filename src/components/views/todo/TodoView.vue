<script setup>
import { computed, ref } from 'vue'

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
    case 'completed':
      return todos.value.filter((todo) => todo.completed)
    case 'incomplete':
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
</script>

<template>
  <div>
    <h1>ToDoリスト</h1>

    <input v-model="todoText" />

    <button @click="addTodo">追加</button>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{ completed: todo.completed }">
          {{ todo.text }}
        </span>

        <button @click="deleteTodo(todo.id)">削除</button>
      </li>
    </ul>

    <p>全件: {{ totalCount }}件 <button @click="filterType = 'all'">すべて表示</button></p>

    <p>
      完了: {{ completedCount }}件 <button @click="filterType = 'completed'">完了のみ表示</button>
    </p>
    <p>
      未完了: {{ incompleteCount }}件
      <button @click="filterType = 'incomplete'">未完了のみ表示</button>
    </p>

    <RouterLink to="/"> TOPへ戻る </RouterLink>
  </div>
</template>
<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>

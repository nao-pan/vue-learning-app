<script setup>
import { useTodos } from '@/composables/useTodos'
import { FILTER_TYPES } from '@/constants/filterTypes'
const {
  todoText,
  filteredTodos,
  totalCount,
  completedCount,
  incompleteCount,
  addTodo,
  deleteTodo,
  changeFilter,
  editingId,
  editingText,
  startEdit,
  saveEdit,
  cancelEdit,
  errorMessage,
} = useTodos()
</script>

<template>
  <div>
    <h1>ToDoリスト</h1>

    <input v-model="todoText" @keyup.enter="addTodo" />

    <button @click="addTodo">追加</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />
        <span v-if="editingId !== todo.id" :class="{ completed: todo.completed }">
          {{ todo.text }}
        </span>
        <input v-else v-model="editingText" @keyup.enter="saveEdit(todo.id)" />

        <button v-if="editingId !== todo.id" @click="startEdit(todo)">編集</button>
        <button v-else @click="saveEdit(todo.id)">保存</button>
        <button v-if="editingId === todo.id" @click="cancelEdit">キャンセル</button>
        <button @click="deleteTodo(todo.id)">削除</button>
      </li>
    </ul>

    <p>
      全件: {{ totalCount }}件 <button @click="changeFilter(FILTER_TYPES.ALL)">すべて表示</button>
    </p>

    <p>
      完了: {{ completedCount }}件
      <button @click="changeFilter(FILTER_TYPES.COMPLETED)">完了のみ表示</button>
    </p>
    <p>
      未完了: {{ incompleteCount }}件
      <button @click="changeFilter(FILTER_TYPES.INCOMPLETE)">未完了のみ表示</button>
    </p>

    <RouterLink to="/"> TOPへ戻る </RouterLink>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}

.error-message {
  color: red;
}
</style>

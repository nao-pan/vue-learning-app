<script setup>
import { useTodos } from '@/composables/useTodos'
import ConfirmModal from '@/components/ConfirmModal.vue'
import { FILTER_TYPES } from '@/constants/filterTypes'
import { computed, ref } from 'vue'

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

const showModal = ref(false)

const deleteTargetId = ref(null)
const deleteTargetTodo = ref(null)

const confirmMessage = computed(() => {
  if (!deleteTargetTodo.value) {
    return ''
  }

  return `「${deleteTargetTodo.value.text}」を削除しますか？`
})

const openDeleteModal = (id) => {
  deleteTargetId.value = id
  showModal.value = true
}

const confirmDelete = () => {
  deleteTodo(deleteTargetId.value)
  showModal.value = false
  deleteTargetId.value = null
}

const cancelDelete = () => {
  showModal.value = false
  deleteTargetId.value = null
}
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
        <button @click="openDeleteModal(todo.id)">削除</button>
      </li>
    </ul>

    <ConfirmModal
      :show="showModal"
      :message="confirmMessage"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
      @close="cancelDelete"
    />

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

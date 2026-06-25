<script setup>
import { useUsers } from '@/composables/useUsers';
import { onMounted } from 'vue';

const {
  username,
  users,
  loading,
  errorMessage,
  noResult,
  fetchUsers,
} = useUsers()

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <h1>ユーザー一覧</h1>

  <input v-model="username" placeholder="ユーザー名" />
  <button @click="fetchUsers" @keyup.enter="fetchUsers">検索</button>

  <p v-if="errorMessage" class="error">
    {{ errorMessage }}
  </p>

  <p v-if="noResult">
    該当するユーザーが見つかりません
  </p>

  <div v-if="loading">
    Loading...
  </div>
  <ul v-else>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<style>
.error {
  color: red;
}
</style>

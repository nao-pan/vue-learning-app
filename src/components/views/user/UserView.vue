<script setup>
import { useUsers } from '@/composables/useUsers';
import { onMounted } from 'vue';

const {
  users,
  loading,
  fetchUsers,
} = useUsers()

onMounted(() => {
  fetchUsers()
})
</script>
<template>
  <h1>ユーザー一覧</h1>

  <div v-if="loading">
    Loading...
  </div>
  <ul v-else>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

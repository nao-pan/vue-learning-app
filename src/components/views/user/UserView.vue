<script setup>
import { useUsers } from '@/composables/useUsers';
import { onMounted } from 'vue';

const {
  users,
  fetchUsers,
} = useUsers()

onMounted(() => {
  fetchUsers()
})
</script>
<template>
  <h1>ユーザー一覧</h1>

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

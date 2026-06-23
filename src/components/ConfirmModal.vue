<script setup>
import { onMounted, onUnmounted } from 'vue'
defineProps({
  show: Boolean,
  message: String,
})

const emit = defineEmits(['confirm', 'cancel', 'close'])

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('cancel')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
<template>
  <div v-if="show" class="modal-overlay" @click="emit('cancel')">
    <div class="modal" @click.stop>
      <button class="close-button" @click="emit('close')">x</button>
      <p>{{ message }}</p>

      <button @click="emit('confirm')">削除</button>

      <button @click="emit('cancel')">キャンセル</button>
    </div>
  </div>
</template>
<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  background: white;
  padding: 20px;
}

.close-button {
  float: right;
}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue'
defineProps({
  show: Boolean,
})

const emit = defineEmits(['close'])

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

      <div class="modal-header">
        <slot name="header" />
      </div>

      <div class="modal-body">
        <slot />
      </div>

      <div class="modal-footer">
        <slot name="footer" />
      </div>
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

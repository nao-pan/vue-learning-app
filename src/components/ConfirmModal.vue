<script setup>
defineProps({
  show: Boolean,
  message: String,
})

const emit = defineEmits(['confirm', 'cancel'])
</script>
<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <p>本当に削除しますか？</p>

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
</style>

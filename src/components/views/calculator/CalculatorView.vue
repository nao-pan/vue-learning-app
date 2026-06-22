<script setup>
import { useCalculator } from '@/composables/useCalculator'

const { display, expression, histories, historyCount, press, clearHistories } = useCalculator()

const buttons = [
  'C',
  '*',
  '/',
  '-',
  '7',
  '8',
  '9',
  '+',
  '4',
  '5',
  '6',
  '=',
  '1',
  '2',
  '3',
  '.',
  '0',
]
const isOperatorButton = (button) => {
  return ['+', '-', '*', '/'].includes(button)
}
</script>

<template>
  <div>
    <div class="calculator">
      <h1>電卓</h1>

      <div class="display">
        <div class="sub-display">
          {{ expression }}
        </div>

        <div class="main-display">
          {{ display }}
        </div>
      </div>

      <div class="button-grid">
        <button
          v-for="button in buttons"
          :key="button"
          @click="press(button)"
          :class="{
            operator: isOperatorButton(button),
            equal: button === '=',
            clear: button === 'C',
          }"
        >
          {{ button }}
        </button>
      </div>
      <h2>計算履歴 {{ historyCount }}件</h2>

      <div v-if="histories.length">
        <button @click="clearHistories">履歴削除</button>
        <ul class="history-list">
          <li v-for="(history, index) in histories" :key="index">
            {{ history }}
          </li>
        </ul>
      </div>

      <p v-else>履歴はありません</p>

      <RouterLink to="/"> TOPへ戻る </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  max-width: 400px;
  margin: 0 auto;
}

.display {
  background: #222;
  color: white;

  font-size: 2rem;

  padding: 1rem;

  margin: 1rem 0;

  text-align: right;

  border-radius: 8px;

  min-height: 80px;
}

.sub-display {
  font-size: 0.8rem;

  color: #aaa;

  text-align: left;

  min-height: 20px;
}

.main-display {
  font-size: 2rem;

  text-align: right;
}

.button-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 8px;
}

.button-grid button {
  padding: 1rem;

  font-size: 1.2rem;

  cursor: pointer;
}
.operator {
  background: orange;
}

.equal {
  background: #42b883;
}

.clear {
  background: #ff6b6b;
}

.history-list {
  margin-top: 1rem;

  padding-left: 1rem;
}
</style>

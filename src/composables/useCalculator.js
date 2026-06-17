import { ref, watch, computed, onMounted } from 'vue'

/**
 * 電卓の状態管理を行うcomposable
 * @returns display,firstNumber,operator,histories,historyCount,press
 */
export function useCalculator() {
  /**
   * state
   */
  const display = ref('0')
  const firstNumber = ref(null)
  const operator = ref(null)
  const histories = ref([])

  /**
   * computed
   */
  const historyCount = computed(() => {
    return histories.value.length
  })

  const expression = computed(() => {
    if (firstNumber.value === null) {
      return ''
    }

    return '${firstNumber.value} ${operator.value}'
  })

  /**
   * Public Method
   */
  const press = (button) => {
    console.log('押された:', button)
    if (isNumber(button)) {
      handleNumber(button)
      return
    }

    if (isOperator(button)) {
      handleOperator(button)
      return
    }

    if (button === 'C') {
      clear()
      return
    }

    if (button === '=') {
      calculate()
      return
    }
  }

  /**
   * Private Method
   */
  const isNumber = (button) => {
    return !isNaN(button)
  }

  const isOperator = (button) => {
    return ['+', '-', '*', '/'].includes(button)
  }

  const handleNumber = (button) => {
    if (display.value === '0') {
      display.value = button
      return
    }

    display.value += button
  }

  const handleOperator = (button) => {
    firstNumber.value = Number(display.value)
    operator.value = button
    display.value = '0'
  }

  const clear = () => {
    display.value = '0'
    firstNumber.value = null
    operator.value = null
  }

  const calculate = () => {
    const secondNumber = Number(display.value)

    let result
    switch (operator.value) {
      case '+':
        result = firstNumber.value + secondNumber
        break
      case '-':
        result = firstNumber.value - secondNumber
        break
      case '*':
        result = firstNumber.value * secondNumber
        break
      case '/':
        result = firstNumber.value / secondNumber
        break
    }

    histories.value.push(`${firstNumber.value} ${operator.value} ${secondNumber} = ${result}`)
    display.value = String(result)

    firstNumber.value = null
    operator.value = null
    return
  }

  /**
   * Watchers
   * localStorageへ履歴を永続化
   */
  watch(
    () => histories.value,
    (newHistories) => {
      localStorage.setItem('calculator_histories', JSON.stringify(newHistories))
    },

    // 配列のpushは参照が変わらないため
    // deep:trueで監視する
    {
      deep: true,
    },
  )

  /**
   * Lifecycle Hooks
   * 初回表示時に保存済み履歴を復元
   */
  onMounted(() => {
    const savedHistories = localStorage.getItem('calculator_histories')
    if (savedHistories) {
      histories.value = JSON.parse(savedHistories)
    }
  })

  return {
    display,
    expression,
    histories,
    historyCount,
    press,
  }
}

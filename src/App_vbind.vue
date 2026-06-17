<script setup>
import { ref } from 'vue'

const count = ref(5)
const count2 = ref(4)
const message = ref('<h1>Hello</h1>')
const vueURL = ref('https://vuejs.org')
const vueId = ref('vue-link')
</script>

<template>
  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <!-- script内トップレベルで変数定義されていないとテンプレートでは使えない -->

  <!-- 以下2行は同じ意味 -->
  <div>{{ count }}</div>
  <div v-text="count"></div>

  <!-- セキュリティリスクがあるためv-html非推奨 -->
  <div>{{ message }}</div>
  <div v-html="message"></div>

  <a href="https://vuejs.org">Vue.js</a>
  <!-- 属性の値には{{}}使えない -->
  <div><a href="{{ vueURL }}">Vue.js</a></div>

  <div><a v-bind="{ id: vueId, href: vueURL }">Vue.js</a></div>

  <!-- v-bindで属性に変数を使える -->
  <div><a v-bind:href="vueURL">Vue.js</a></div>
  <div>
    <button :disabled="false">button</button>
  </div>
</template>

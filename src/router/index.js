import BreadcrumbView from '@/components/views/breadcrumb/BreadcrumbView.vue'
import CalculatorView from '@/components/views/calculator/CalculatorView.vue'
import CounterView from '@/components/views/counter/CounterView.vue'
import DarkModeView from '@/components/views/dark-mode/DarkModeView.vue'
import HomeView from '@/components/views/HomeView.vue'
import TodoView from '@/components/views/todo/TodoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/counter',
    component: CounterView,
  },
  {
    path: '/todo',
    component: TodoView,
  },
  {
    path: '/calculator',
    component: CalculatorView,
  },
  {
    path: '/dark-mode',
    component: DarkModeView,
  },
  {
    path: '/breadcrumb',
    component: BreadcrumbView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

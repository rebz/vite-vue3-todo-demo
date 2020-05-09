import { StoreSymbol } from './symbol'
import { inject } from 'vue'

export function useTodoStore() {
  const todoStore = inject(StoreSymbol)
  if (!todoStore) throw '`todoStore` doesn\'t exist'
  return todoStore
}
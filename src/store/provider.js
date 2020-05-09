import { StoreSymbol } from './symbol'
import { provide } from 'vue'
import useTodoStore from './todoStore'

export const TodoStoreProvider = {
  setup(props, context) {
    provide(StoreSymbol, useTodoStore)
    console.info({context})
    return () => context.slots.default()
  },
}
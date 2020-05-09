import { reactive, computed } from 'vue';
import { generateId } from './helpers'

const todoState = reactive({ 
    todos: [
        {
            id: generateId(),
            desc: 'Clean dishes',
            done: false
        },
        {
            id: generateId(),
            desc: 'Wash car',
            done: false
        },
        {
            id: generateId(),
            desc: 'Feed kitties',
            done: false
        },
        {
            id: generateId(),
            desc: 'Dance on the graves of my enemies',
            done: true
        },
    ]
})

const createTodo = (desc) => {
    if (!desc) throw '`task` was not defined'
    todoState.todos.push({
        id: generateId(),
        desc,
        done: false
    })
}

const listTodos = computed(() => {
    return todoState.todos
})

const getTodo = todoId => {
    if (!todoId) throw '`todoId` was not defined'
    return todoState.todos.find(todo => todo.id == todoId)
}

const deleteTodo = todoId => {
    if (!todoId) throw '`todoId` was not defined'
    const index = todoState.todos.findIndex(todo => todo.id == todoId)
    todoState.todos.splice(index, 1)
}

const toggleTodo = todoId => {
    if (!todoId) throw '`todoId` was not defined'
    const todo = todoState.todos.find(todo => todo.id == todoId)
    todo.done = !todo.done
}

const clearCompletedTodos = () => {
    const toDelete = todoState.todos.filter(todo => todo.done)
    toDelete.map(todo => deleteTodo(todo.id))
}

export default {
    todoState,
    listTodos,
    createTodo,
    getTodo,
    deleteTodo,
    toggleTodo,
    clearCompletedTodos
}

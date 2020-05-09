import { reactive, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const todoState = reactive({ 
    todos: [
        {
            id: 'awdawdawdawd',
            desc: 'Clean dishes',
            done: false
        },
        {
            id: '12ed2t34g3',
            desc: 'Wash car',
            done: false
        },
        {
            id: 'vJ78N@n97834h',
            desc: 'Feed kitties',
            done: false
        },
        {
            id: '3t4yhtrnw3',
            desc: 'Dance on the graves of my enemies',
            done: true
        },
    ]
})

const createTodo = (desc) => {
    if (!desc) throw '`task` was not defined'
    todoState.todos.push({
        id: 'someid',
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
    const notCompeleted = todoState.todos.filter(todo => !todo.done)
    todoState.todos = notCompeleted
}

export {
    listTodos,
    createTodo,
    getTodo,
    deleteTodo,
    toggleTodo,
    clearCompletedTodos
}
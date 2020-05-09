<template>
    <div class="List">
        <ul v-if="listTodos.length">
            <li v-for="(todo, index) in listTodos" :key="index" :class="{'completed': todo.done}">
            <label>
                <input type="checkbox" :checked="todo.done" @input="toggleTodo(todo.id)" />
                {{ todo.desc }}
            </label>
            <button @click="deleteTodo(todo.id)">
                remove
            </button>
            </li>
        </ul>
        <p class="empty" v-else>
            Empty
        </p>
    </div>
</template>

<script>
    import { 
        listTodos, 
        createTodo, 
        deleteTodo, 
        toggleTodo,
        clearCompletedTodos
    } from './store/todoStore'

    export default {
        data: () => ({
            listTodos
        }),
        methods: {
            createTodo,
            deleteTodo,
            toggleTodo
        }
    }
</script>


<style lang="scss" scoped>
  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    border-top: #ccc solid 1px;
    display: flex;
    justify-content: space-between;
  
    &:first-child {
        border-top: none;
    }

    label {
        padding: 8px 4px;
        width: 100%;
        display: cursor;
        
        &:hover {
            background: pink;
        }
    }
  }

  .completed {

    label {
        text-decoration: line-through;
        color: #aaa;
    }
  }

  .empty {
      font-size: 24px;
      color: #aaa;
  }
</style>

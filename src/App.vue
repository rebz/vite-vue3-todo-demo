<template>
  <h1>Todo App</h1>
  <todo-toolbar />
  <todo-list />
</template>

<script>
  import TodoList from './components/TodoList.vue'
  import TodoToolbar from './components/TodoToolbar.vue'

  export default {
    components: {
      TodoList,
      TodoToolbar
    },
  }
</script>

<style scoped>
  h1 {
    color: #4fc08d;
  }

  h1, p {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

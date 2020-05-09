<template>

  <div class="Toolbaar">
    <form @submit.prevent="submitForm">
      <input v-model="inputValue" />
      <button>Add</button>
    </form>
    <button @click.prevent="clearCompletedTodos">
      clear completed
    </button>
  </div>

</template>

<script>
    import { ref } from 'vue'
    import { createTodo, clearCompletedTodos } from './../store/todoStore'
    export default {
        setup() {

            const inputValue = ref('')

            const submitForm = () => {
                try {
                    createTodo(inputValue.value)
                    inputValue.value = ''
                } catch (e) {
                    alert(e)
                }
            }

            return {
                clearCompletedTodos,
                submitForm,
                inputValue,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Toolbar {

    }
</style>
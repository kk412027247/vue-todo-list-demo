<style src="App.css"></style>

<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input
                    type="text"
                    class="new-todo"
                    autofocus
                    autocomplete="off"
                    placeholder="what needs to be done"
                    @keyup.enter="addTodo"
            >
        </header>
    </section>
</template>

<script>
  import {mapActions} from 'vuex'

  const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
  };

  export default {
    name: "App",
    data() {
      return {
        visibility: 'all',
        filters,
      }
    },
    computed: {
      todos() {
        return this.$store.state.todos
      },
      allChecked() {
        return this.todos.every(todo => todo.done)
      },
      filteredTodos() {
        return filters[this.visibility](this.todos)
      },
      remaining() {
        return this.todos.filter(todo => !todo.done).length
      }
    },
    methods: {
      ...mapActions(['toggleAll', 'clearCompleted']),
      addTodo(e) {
        const text = e.target.valueOf();
        if (text.trim()) {
          this.$store.dispatch('addTodo', text)
        }
        e.target.value = ''
      }
    },
    filters:{
      pluralize:(n,w) => n === 1 ? w : (w +'s'),
      captitalize:s => s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
</script>

<style scoped>

</style>

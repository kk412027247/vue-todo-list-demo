export default {
  addTodo(state, todo){
    state.todos.push(todo)
  },

  remove(state,todo){
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo(state, {todo, text = todo.text, done = todo.done}){
    const index = state.todos.indexOf(todo);
    state.todos.splice(index, 1, {
      ...todo,
      text,
      done,
    })

  }
}

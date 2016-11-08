const Ash = require('@ash-framework/ash')

const todos = [
  {id: 1, text: 'take out trash'},
  {id: 2, text: 'have a shower'}
]

module.exports = class Route extends Ash.Route {
  model () {
    const id = Number(this.params.todo_id)
    return todos.filter(todo => todo.id === id)
  }
}

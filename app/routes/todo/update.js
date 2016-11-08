const Ash = require('@ash-framework/ash')

const todos = [
  {id: 1, text: 'take out trash'},
  {id: 2, text: 'have a shower'}
]

module.exports = class Route extends Ash.Route {
  model () {
    const id = Number(this.params.todo_id)
    const todo = todos.filter(todo => todo.id === id)[0]
    Object.assign(todo, this.body)
    return todo
  }
}

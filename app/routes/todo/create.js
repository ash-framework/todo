const Ash = require('@ash-framework/ash')

let id = 0
const todos = []

module.exports = class Route extends Ash.Route {
  model () {
    const todo = this.body
    todo.id = id++
    todos.push(todo)
    return todo
  }
}

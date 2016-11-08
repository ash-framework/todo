const Ash = require('@ash-framework/ash')

class Router extends Ash.Router {
}

Router.map(function () {
  this.route('todo', function () {
    this.route('find', {path: '/:todo_id'})
    this.route('create', {method: 'post', path: '/'})
    this.route('update', {method: 'patch', path: '/:todo_id'})
    this.route('delete', {method: 'delete', path: '/:todo_id'})
  })
})

module.exports = Router

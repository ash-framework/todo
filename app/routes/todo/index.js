const Ash = require('@ash-framework/ash')

module.exports = class Route extends Ash.Route {
  beforeModel () {
    if (this.httpContext.get('user').isAdmin) {
      return Promise.reject(new Error('User unauthorized'))
    }
  }

  model () {
    return [
      {id: 1, text: 'take out trash'},
      {id: 2, text: 'have a shower'}
    ]
  }

  error (err) {
    console.error(err)
  }
}

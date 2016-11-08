const Ash = require('@ash-framework/ash')

module.exports = class Middleware extends Ash.Middleware {
  register (httpContext) {
    httpContext.set('user', {
      id: 1,
      name: 'Joe Bloggs',
      isAdmin: false
    })
  }
}

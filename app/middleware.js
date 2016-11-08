const Ash = require('@ash-framework/ash')
const bodyparser = require('body-parser')

class MiddlewareRouter extends Ash.MiddlewareRouter {
}

MiddlewareRouter.map(function () {
  this.middleware(bodyparser.json())
  this.middleware('user')
})

module.exports = MiddlewareRouter

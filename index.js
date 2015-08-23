'use strict'

var bloomrun = require('bloomrun')

function objectRouter () {
  var catalog = bloomrun()

  return {
    add: add,
    act: act,
    catalog: catalog
  }

  function add (pattern, func) {
    catalog.add(pattern, func)
    return this
  }

  function act (msg, callback) {
    var func = catalog.lookup(msg)

    if (!func) {
      return callback(new Error('message does not match any pattern'))
    }

    func(msg, callback)
  }
}

module.exports = objectRouter

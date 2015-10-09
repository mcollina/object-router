'use strict'

var bloomrun = require('bloomrun')

function objectRouter () {
  var catalog = bloomrun()

  return {
    add: add,
    act: act,
    list: list,
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

  function list (pattern) {
    return catalog.list(pattern, { patterns: true })
  }
}

module.exports = objectRouter

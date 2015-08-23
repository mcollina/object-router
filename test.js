'use strict'

var test = require('tape')
var objectRouter = require('./')

test('route a call', function (t) {
  t.plan(3)

  var router = objectRouter()
  var expected = {
    cmd: 'hello',
    name: 'world'
  }

  router.add({
    cmd: 'hello'
  }, function (msg, cb) {
    t.deepEqual(msg, expected, 'msg matches')
    cb(null, {
      result: 'hello ' + msg.name
    })
  })

  router.act(expected, function (err, result) {
    t.error(err, 'no error')
    t.deepEqual(result, {
      result: 'hello world'
    }, 'result matches')
  })
})

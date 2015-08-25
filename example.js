'use strict'

var router = require('./')()

router.add({
  cmd: 'hello'
}, function (msg, cb) {
  cb(null, {
    result: 'hello ' + msg.name
  })
})

router.act({
  cmd: 'hello',
  name: 'world'
}, console.log)

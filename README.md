# object-router&nbsp;&nbsp;[![Build Status](https://travis-ci.org/mcollina/object-router.png)](https://travis-ci.org/mcollina/object-router)

Route your functions with pattern matching. Inspired by
[seneca](http://npm.im/seneca).

__object-router__ is based on [bloomrun](http://npm.im/bloomrun), so all patterns will be matched in insertion order.

## Install

```
npm i object-router --save
```

## Example

```js
'use strict'

var router = require('object-router')()

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

console.log(router.list())
```

## License

MIT

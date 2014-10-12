var tape = require('tape')
var schema = require('../')

tape('c', function(t) {
  schema(__dirname+'/c.proto', function(err, sch) {
    t.notOk(err, 'no err')
    t.same(sch.messages.length, 1)
    schema(__dirname+'/c', function(err, sch) {
      t.notOk(err, 'no err')
      t.same(sch.messages.length, 1)
      t.end()
    })
  })
})

tape('b imports c', function(t) {
  schema(__dirname+'/b.proto', function(err, sch) {
    t.notOk(err, 'no err')
    t.same(sch.messages.length, 2)
    schema(__dirname+'/b', function(err, sch) {
      t.notOk(err, 'no err')
      t.same(sch.messages.length, 2)
      t.end()
    })
  })
})

tape('a imports b imports c', function(t) {
  schema(__dirname+'/a.proto', function(err, sch) {
    t.notOk(err, 'no err')
    t.same(sch.messages.length, 3)
    schema(__dirname+'/a', function(err, sch) {
      t.notOk(err, 'no err')
      t.same(sch.messages.length, 3)
      t.end()
    })
  })
})
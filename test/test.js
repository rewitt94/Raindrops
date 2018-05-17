var assert = require('assert');
var ModulusMap = require('./../src/modulusmap.js')

describe('#ModulusMap', function() {

  describe('#Constructor', function() {

    it('returns a function', function() {
      assert.equal(typeof ModulusMap(), "function");
    });

  });

  describe('#Instance', function() {

    it('returns input number when instantiated without parameters', function() {
      number = ModulusMap()
      assert.equal(number(1003), 1003);
    });

    it('returns object value if object key is a factor of input', function() {
      mapper = ModulusMap({2: 'return me!'})
      assert.equal(mapper(10), 'return me!');
    });

    it('retuns input if object key is not a factor of input', function() {
      mapper = ModulusMap({3: 'do not return!'})
      assert.equal(mapper(10), 10);
    });

    it('returns corresponding object value if an object key is a factor of input', function() {
      mapper = ModulusMap({7: 'pick me!', 5: 'do not pick me!'})
      assert.equal(mapper(21), 'pick me!');
    })

  });

});

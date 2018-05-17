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

    it('returns a concatnated string of object values if multiple object keys are factors of input', function() {
      mapper = ModulusMap({2: 'hello', 3: 'world'})
      assert.equal(mapper(6), 'helloworld');
    })

    it('values are concatnated by numeric order of key', function() {
      mapper = ModulusMap({100: 'after', 10: 'before', 50: 'now',})
      assert.equal(mapper(500), 'beforenowafter');
    })

  });

  describe('Raindrops scenario', function() {

    RAINDROPS = {
      3: 'Pling',
      5: 'Plang',
      7: 'Plong'
    }

    let raindrops = ModulusMap(RAINDROPS)

    let tests = [
      { input: 2, expected: 2 },
      { input: 3, expected: 'Pling' },
      { input: 10, expected: 'Plang' },
      { input: 21, expected: 'PlingPlong' },
      { input: 35, expected: 'PlangPlong' }
    ]

    tests.forEach( function(test){
      it(`raindrops(${test.input}) == ${test.expected}`, function() {
        assert.equal(raindrops(test.input), test.expected);
      })
    })

  });

});

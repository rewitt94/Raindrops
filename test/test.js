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

  });

});

var assert = require('assert');
var ModulusMap = require('./../src/modulusmap.js')

describe('#ModulusMap', function() {

  describe('#Constructor', function() {

    it('returns a function', function() {
      assert.equal(typeof ModulusMap(), "function");
    });

  });

});

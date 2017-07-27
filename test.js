'use strict';

require('mocha');
var assert = require('assert');
require('./');

describe('[].last', function() {

  it('should return the last element in the array:', function() {
    assert.strictEqual([1, 2, 3, 4, 5].last, 5);
  });

  it('should return undefined if array is empty:', function() {
    assert.strictEqual([].last, undefined);
  });

});
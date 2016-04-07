'use strict';

const assert = require('assert');
const assessment = require('./lib/diagnostic.js');

describe('Reduce', function() {
  let array = [-1, -2, -3, -4, -5];
    describe('sum', function () {
      it('returns the sum of the array', function () {
        assert.equal(array.reduce(assessment.sum),-15);
      });
    });

//m test1

  describe('min', function() {
    it('returns the minimum of the array elements', function() {
      assert.equal(array.reduce(assessment.min), -5);
    });
  });
});

//reduce end

describe('enumerable', function() {
let array = [-1, -2, -3, -4, -5];
  describe('any', function() {
    it('returns false for greater than 0 predicate', function() {
      assert.equal(assessment.any(array, n => n > 0), false);
    });

    it('returns true for less than 0 predicate', function() {
      assert.equal(assessment.any(array, n => n < 0), true);
    });

    it('returns true for equal -3 predicate', function() {
      assert.equal(assessment.any(array, n => n === -3 ), true);
    });
  });

  describe('select', function() {
    let answer = [-1, -3, -5];
    it('returns correct array for not even predicate', function() {
      assert.equal(assessment.select(array, n => n % 2), answer);
    });
  });

  describe('first', function() {

    var withDuplicates = [{
      name: 'first',
    }, {
      name: 'repeat',
    }, {
      name: 'third',
    }, {
      name: 'repeat',
    }, {
      name: 'fifth',
    }, ];

    it('returns correct object in array', function() {
      assert.equal(assessment.first(withDuplicates,
        o => o.name === 'repeat'), withDuplicates[1]);
    });

    it('returns undefined for unmatched object', function() {
      assert.equal(assessment.first(withDuplicates,
        o => o.name === 'fourth'), undefined);
    });

  });

});

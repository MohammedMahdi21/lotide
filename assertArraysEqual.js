const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`ππΌππΌππΌ the actual: ${actual} === the expected: ${expected}`);
  } else {
    console.log(`βοΈβοΈβοΈ the actual: ${actual} !== the expected: ${expected}`);
  }
};

module.exports = assertArraysEqual;



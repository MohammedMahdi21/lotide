const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍🏼👍🏼👍🏼 the actual: ${actual} === the expected: ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ the actual: ${actual} !== the expected: ${expected}`);
  }
};

module.exports = assertArraysEqual;



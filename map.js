const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍🏼👍🏼👍🏼 PASSED , Array 1 = Array 2`);
  } else {
    console.log(`⛔️⛔️⛔️ FAILED , Array 1 != Array 2`);
  }
};


const eqArrays = function(actual, expected) {

  if (actual.length !== expected.length) {

    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }

    }
  }
  return true;

};



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;
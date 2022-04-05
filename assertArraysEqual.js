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



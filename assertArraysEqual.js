const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍🏼👍🏼👍🏼 PASSED , Array 1 = Array 2`);
  } else {
    console.log(`⛔️⛔️⛔️ FAILED , Array 1 != Array 2`);
  }
};


const eqArrays = function(actual, expected) {
  let j = 0;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[j]) {
      j++;
    } else  {
      return false;
    }

  } return true;

};



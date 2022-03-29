const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 PASSED`);
  } else {
    console.log(`⛔️⛔️⛔️ FAILED`);
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



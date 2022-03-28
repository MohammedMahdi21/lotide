const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 PASS`);
  } else {
    console.log(`⛔️⛔️⛔️ FAIL`);
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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
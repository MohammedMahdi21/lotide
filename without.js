const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍🏼👍🏼👍🏼 PASSED , original array is not modifyed`);
  } else {
    console.log(`⛔️⛔️⛔️ FAILED , original array is modifyed`);
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

const without = function(source, itemsToRemove) {
  const filteredArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] === source[j]) {
        filteredArray.splice(j, 1);
      }
    }

  }
  return filteredArray
};

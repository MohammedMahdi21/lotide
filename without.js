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
  const filteredArray = source.concat();
  for (let i = 0; i < itemsToRemove.length; i++) {
    const itemToRemove = itemsToRemove[i];
    for (let j = filteredArray.length - 1; j >= 0; j--) {
      const sourceToCheck = filteredArray[j];
      if (itemToRemove === sourceToCheck) {
        filteredArray.splice(j, 1);
      }
    }

  }
  return filteredArray;
};

without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]);

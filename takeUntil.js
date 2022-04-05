const takeUntil = function(array, callback) {
  const result = [];
  for (let items of array) {
    if (!callback(items)) {
      result.push(items);
    } else {
      return result;
    }
  }
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


//const data = [1, 2, 5, 7, 2, 0, 2, -1, 4, 5];
//const results = takeUntil(data, x => x < 0);
//assertArraysEqual(results, [1, 2, 5, 7, 2, 0, 2]);
//
//
//console.log('---');
//
//const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
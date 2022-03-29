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
    } else {
      return false;
    }

  } return true;

};

const middle = function(array) {
  const middleElement = [];
  let counter = 0;
  if (array.length <= 2) {
    return middleElement;

  } else if (array.length % 2 === 0) {
    counter = (array.length / 2) - 1;
    middleElement.push(array[counter], array[counter + 1]);

  } else {
    counter = Math.floor(array.length / 2);
    middleElement.push(array[counter]);
  }


  return middleElement;
};



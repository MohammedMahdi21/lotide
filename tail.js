const tail = function(array) {
  let arrayTail = [];
  arrayTail = array.slice(1);
  return arrayTail;
};


const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 ${actual} === expected`);
  } else {
    console.log(`⛔️⛔️⛔️ ${actual} !== expected`);
  }
};


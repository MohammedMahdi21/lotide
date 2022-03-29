const head = function(array) {

  return array.slice(0, 1);
};



const assertEqual = function(actual, expected) {
  if (expected === actual[0]) {
    console.log(`👍🏼👍🏼👍🏼 ${actual} === expected`);
  } else {
    console.log(`⛔️⛔️⛔️ ${actual} !== expected`);
  }
};


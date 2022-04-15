const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 the actual: ${actual} === the expected: ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ the actual: ${actual} !== the expected: ${expected}`);
  }
};



module.exports = assertEqual;
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`ππΌππΌππΌ the actual: ${actual} === the expected: ${expected}`);
  } else {
    console.log(`βοΈβοΈβοΈ the actual: ${actual} !== the expected: ${expected}`);
  }
};

module.exports = assertEqual;
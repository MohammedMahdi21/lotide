const assertEqual = function (actual, expected) {
  if (expected === actual) {
    console.log(`ππΌππΌππΌ ${actual} === expected`);
  } else {
    console.log(`βοΈβοΈβοΈ ${actual} !== expected`);
  }
};

const findKeyByValue = function(obj, objValue) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === objValue) {
      return key;
    }

  }
};

module.exports = findKeyByValue;
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`ππΌππΌππΌ ${actual} === expected`);
  } else {
    console.log(`βοΈβοΈβοΈ ${actual} !== expected`);
  }
};

const findKey = function(object, callBack) {
  for (let keys in object) {
    if (callBack(object[keys])) {
      return keys;
    }
  }
  return undefined;
};

module.exports = findKey;

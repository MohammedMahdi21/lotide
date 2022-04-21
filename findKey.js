const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 ${actual} === expected`);
  } else {
    console.log(`⛔️⛔️⛔️ ${actual} !== expected`);
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

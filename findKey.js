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



//const result = findKey({
//  "Blue Hill": { stars: 1 },
//  "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
//}, x => x.stars === 2);  // => "noma"
//
//assertEqual(result, "noma");
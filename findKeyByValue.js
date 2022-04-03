const assertEqual = function (actual, expected) {

  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 ${actual} === expected`);
  } else {
    console.log(`⛔️⛔️⛔️ ${actual} !== expected`);
  }
};


const findKeyByValue = function(obj, objValue) {
  
  for (const key of Object.keys(obj)) {
    if (obj[key] === objValue) {
      return key;
    }

  }
};



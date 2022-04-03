const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {


      if (Array.isArray(object1[key])) {
        const arrayAreEq = eqArrays(object1[key], object2[key]);
        if (!arrayAreEq) {

          return false;
        }
      } else if (object1[key] !== object2[key]) {

        return false;
      }




    }
    return true;
  } else {

    return false;
  }

};

const eqArrays = function (actual, expected) {

  if (actual.length !== expected.length) {

    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }

    }
  }
  return true;

};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (Object1, Object2) {
  const inspect = require('util').inspect; 
  if (eqObjects(Object1, Object2)) {
    console.log(`👍🏼👍🏼👍🏼 Assertion PASSED , ${inspect(Object1)} === ${inspect(Object2)}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion FAILED , ${inspect(Object1)} !== ${inspect(Object2)}`);
  }
};
const cdi = { c: "1", d: ["2", 3]};
const dci = { d: ["2", 3], c: "1" };
assertObjectsEqual(cdi,dci);

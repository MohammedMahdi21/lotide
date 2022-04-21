const assertEqual = function (array1, array2) {
  if (array2 === array1) {
    console.log(`👍🏼👍🏼👍🏼 ${array1} === ${array2}`);
  } else {
    console.log(`⛔️⛔️⛔️ ${array1} !== ${array2}`);
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




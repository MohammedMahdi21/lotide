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


//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//assertEqual(eqObjects(ab, ba), true ); // => true
//const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false

//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true
//
//const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false
//
//const cdi = { c: "1", d: ["2", 3] };
//const dci = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cdi, dci), true);


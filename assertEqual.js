const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log("👍🏼👍🏼👍🏼 " + actual + " === " + expected);
  } else {
    console.log("⛔️⛔️⛔️ " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Mahdi", "Mahdi");
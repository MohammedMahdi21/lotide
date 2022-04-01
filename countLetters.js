const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`👍🏼👍🏼👍🏼 ${actual} === expected`);
  } else {
    console.log(`⛔️⛔️⛔️ ${actual} !== expected`);
  }
};



const countLetters = function(sentence) {
  //const letterss = sentence.replaceAll(" ", "");
  const letters = "abcdefghijklmnnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let counter = {};
  for (const letter of sentence) {
    if (letters.includes(letter)) {
      if (counter[letter]) {
        counter[letter] += 1;
      } else {
        counter[letter] = 1;
      }
    }
  }

  return counter;
};

countLetters("lighthouse in the house");
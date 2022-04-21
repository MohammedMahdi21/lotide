const countLetters = function(sentence) {

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
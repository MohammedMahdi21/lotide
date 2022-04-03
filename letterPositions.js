
const letterPositions = function(sentence) {
  
  const results = {};
  const letters = "abcdefghijklmnnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let counter = 0;
  for (const letter of sentence) {
    if (letters.includes(letter)) {
      if (results[letter]) {
        results[letter].push(counter);
      } else {
        results[letter] = [counter];
      }
    }
    counter++;
  }
  return results;
};



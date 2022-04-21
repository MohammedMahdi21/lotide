const middle = function(array) {
  const middleElement = [];
  let counter = 0;
  if (array.length <= 2) {
    return middleElement;

  } else if (array.length % 2 === 0) {
    counter = (array.length / 2) - 1;
    middleElement.push(array[counter], array[counter + 1]);

  } else {
    counter = Math.floor(array.length / 2);
    middleElement.push(array[counter]);
  }
  return middleElement;
};

module.exports = middle;



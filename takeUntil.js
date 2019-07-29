
//return a slice of the array with elements taken from the beginning until the callback returns a truthy value
const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item);//otherwise keep adding to the loop
    }
  }
  return output;
};

module.exports = takeUntil;
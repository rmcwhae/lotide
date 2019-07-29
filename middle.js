let middle = function(inputArray) {
  let output = [];//returns by default
  let midIndex = 0;
  if (inputArray.length > 2 && inputArray.length % 2 === 0) {
    //return both middle items
    midIndex = inputArray.length / 2;
    output.push(inputArray[midIndex - 1]);
    output.push(inputArray[midIndex]);
    // console.log(`Hello! miditem index is ${midIndex}`);
  } else if (inputArray.length > 2 && inputArray.length % 2 !== 0) {
    midIndex = Math.floor(inputArray.length / 2);
    // console.log(`Hello! miditem index is ${midIndex}`);

    //return middle item only
    output.push(inputArray[midIndex]);
  }
  return output;
};

module.exports = middle;


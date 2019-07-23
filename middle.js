// Assertion Function

let assertArraysEqual = function(inputArray1, inputArray2, message) {
  if (eqArrays(inputArray1, inputArray2)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}


let eqArrays = function(inputArray1, inputArray2) {
  if (inputArray1 && inputArray2) {
    if (inputArray1.length !== inputArray2.length) {
      return false;
    } else {
      for (let i = 0; i < inputArray1.length; i++) {
        // console.log(`arr1: ${inputArray1[i]}; arr2: ${inputArray2[i]}`);
        if (inputArray1[i] !== inputArray2[i]) return false;
      }
    }
    return true;
  }
};

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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(middle([1]), []);
// console.log(middle([1, 2, 3]));
// console.log(middle([1]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

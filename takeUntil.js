// Assertion Function

let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} === ${expected}`);
  }
};


let eqArrays = function(inputArray1, inputArray2) {
  if (inputArray1.length !== inputArray2.length) {
    return false;
  } else {
    for (let i = 0; i < inputArray1.length; i++) {
      // console.log(`arr1: ${inputArray1[i]}; arr2: ${inputArray2[i]}`);
      if (inputArray1[i] !== inputArray2[i]) return false;
    }
  }
  return true;
};



//return a slice of the array with elements taken from the beginning until the callback returns a truthy value
const takeUntil = function(array, callback) {
  // ...
};
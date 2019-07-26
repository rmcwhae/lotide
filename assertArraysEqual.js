// Assertion Function
let assertArraysEqual = function(actual, expected, message) {
  if (eqArrays(actual, expected)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} === ${expected}`);
  }
};

let eqArrays = function(inputArray1, inputArray2) {
  let arraysEquivalent = true;
  if (inputArray1.length !== inputArray2.length) {
    arraysEquivalent = false;
  } else {
    for (let i = 0; i < inputArray1.length; i++) {
      //if item is an array, call func recursively
      if (Array.isArray(inputArray1[i])) {
        arraysEquivalent = (eqArrays(inputArray1[i], inputArray2[i]));
      } else {//continue only if item is not a sub-array (base case)
        for (let j = 0; j < inputArray1.length; j++) {
          if (inputArray1[j] !== inputArray2[j]) arraysEquivalent = false;
        }
      }

    }
  }
  return arraysEquivalent;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true

assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]); // => false
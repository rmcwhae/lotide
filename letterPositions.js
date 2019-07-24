// Assertion Function
let assertArraysEqual = function(inputArray1, inputArray2, message) {
  if (eqArrays(inputArray1, inputArray2)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};
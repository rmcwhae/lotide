// Assertion Function
let assertArraysEqual = function(inputArray1, inputArray2) {
  if (eqArrays(inputArray1, inputArray2)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};


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

let flatten = function(inputArray) {
  let output = [];
  for (let item of inputArray) {
    if (Array.isArray(item)) {
      // console.log(`item: ${item}`);
      for (let inputArrayItem of item) output.push(inputArrayItem);
    } else {
      // console.log(`item: ${item}`);

      output.push(item);
    }
  }
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, ['a', 4], 5, [6]]), [1, 2, 'a', 4, 5, 6]);
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

let itemInArray = function(item, arrayToCheck) {
  let found = false;
  for (let arrayToCheckItem of arrayToCheck) {
    // console.log(`item: ${item}; arrayToCheckItem: ${arrayToCheckItem}`);
    // console.log(item === arrayToCheckItem);
    if (item === arrayToCheckItem) found = true;
  }
  return found;
};
console.log('itemInArray: ');
console.log(itemInArray(1, [1, 2, 3]));

let without = function(source, itemsToRemove) {
  let output = [];
  //add items to output from source only if they don't exist in itemsToRemove
  for (let item of source) {
    if (!itemInArray(item, itemsToRemove)) output.push(item);
    // }
  }
  return output;
};


module.exports = without;
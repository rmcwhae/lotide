// Assertion Functions
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
  let output = [];
  for (let item of array) {
    // console.log('item is: ', item);
    // console.log('callback of item is: ', callback(item));
    if (callback(item)) {
      break;//if callback(item) becomes true, exit the loop
    } else {
      output.push(item);//otherwise keep adding to the loop
    }
  }
  return output;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// Assertion Function

let assertArraysEqual = function(actual, expected, message) {
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
    
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word === 'to' );
assertArraysEqual(results3, [false, false, true, false, false]);
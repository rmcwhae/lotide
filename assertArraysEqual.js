const eqArrays = require('./eqArrays');

let assertArraysEqual = function(actual, expected, message) {
  if (eqArrays(actual, expected)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} === ${expected}`);
  }
};


module.exports = assertArraysEqual;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(inputArray) {//removes fist item from array
  let outputArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
};

// Test Case: Check the original array
const words = ['things', 'stuff', 'items'];
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!
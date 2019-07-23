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

let without = function(source, itemsToRemove) {

};


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
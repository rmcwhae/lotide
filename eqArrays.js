
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

module.exports = eqArrays;
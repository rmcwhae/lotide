// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // let identical = true;//start true; now let's prove it wrong
  //stuff where identical could become false
  if (Object.keys(object1).length === Object.keys(object2).length) {//same number of keys
    //same number of keys so let's compare values
    let object1Keys = Object.keys(object1);//array of keys from first object
    for (let key of object1Keys) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;//return false when arrays don't match
      } else {
        if (object1[key] !== object2[key]) {
          return false; //if both key values aren't the same
        }
      }
    }
    return true;
  } else return false;//different number of keys, so return false; could have used Object.keys

  // return identical;
};
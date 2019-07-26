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
  if (Object.keys(object1).length === Object.keys(object2).length) {//same number of keys
    //same number of keys so let's compare values
    let object1Keys = Object.keys(object1);//array of keys from first object
    for (let key of object1Keys) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;//return false when arrays don't match
      } else if (object1[key] instanceof Object) {//recursive object stuff
        //if object1[key] is an object, recursively call
        return eqObjects(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false; //if both key values aren't the same
        }
      }
    }
    return true;
  } else return false;//different number of keys, so return false; could have used Object.keys
};

const object1a = { a: "1", b: "2" };
const object2a = { b: "2", a: "1" };
assertEqual(eqObjects(object1a, object2a), true);

const object3a = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(object1a, object3a), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
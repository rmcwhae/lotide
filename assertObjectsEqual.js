// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const eqArrays = function(inputArray1, inputArray2) {
  if (inputArray1.length !== inputArray2.length) {
    return false;
  } else {
    for (let i = 0; i < inputArray1.length; i++) {
      // assertObjectsEqual(`arr1: ${inputArray1[i]}; arr2: ${inputArray2[i]}`);
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
assertObjectsEqual(object1a, object2a);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); //false



assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let identical = true;//start true; now let's prove it wrong
  //stuff where identical could become false
  if (Object.keys(object1).length === Object.keys(object2).length) {//same number of keys
    //same number of keys so let's compare values
    let object1Keys = Object.keys(object1);//array of keys from first object
    for (key of object1Keys) {
      if (object1[key] !== object2[key]) identical = false;//false if both object's values for this key aren't the same
    }
    // let keyInObject1 = Object.keys(object1);//gives array of 
  } else identical = false;//different number of keys, so return false; could have used Object.keys

  return identical;
};

const object1a = { a: "1", b: "2" };
const object2a = { b: "2", a: "1" };
console.log(eqObjects(object1a, object2a));

const object3a = { a: "1", b: "2", c: "3" };
console.log(eqObjects(object1a, object3a));
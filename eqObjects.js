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
  // let identical = true;//start true; now let's prove it wrong
  //stuff where identical could become false
  if (Object.keys(object1).length === Object.keys(object2).length) {//same number of keys
    //same number of keys so let's compare values
    let object1Keys = Object.keys(object1);//array of keys from first object
    for (let key of object1Keys) {
      // console.log(`object1[${key}]: ${object1[key]}; object2[${key}]: ${object2[key]}`);
      // console.log('stuff');
      if (object1[key] !== object2[key]) {
        return false; //if both key values aren't the same
      }
    }
    return true;
  } else return false;//different number of keys, so return false; could have used Object.keys

  // return identical;
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
assertEqual(eqObjects(cd, cd2), true);

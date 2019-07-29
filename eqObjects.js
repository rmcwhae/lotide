const eqArrays = require('../eqArrays');

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

module.exports = eqObjects;
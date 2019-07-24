// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// givenValue: a string to search for in the values of the givenObject
// givenObject: object containing keys and values
const findKeyByValue = function(givenObject, givenValue) {
  let output = undefined;
  for (let item in givenObject) {
    if (givenObject[item] === givenValue) output = item;//return key if givenValue matches selectedObject value
  }
  return output;
};


const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
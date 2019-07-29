// givenValue: a string to search for in the values of the givenObject
// givenObject: object containing keys and values
const findKeyByValue = function(givenObject, givenValue) {
  let output = undefined;
  for (let item in givenObject) {
    if (givenObject[item] === givenValue) output = item;//return key if givenValue matches selectedObject value
  }
  return output;
};


module.exports = findKeyByValue;
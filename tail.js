
const tail = function(inputArray) {//removes fist item from array
  let outputArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
};

module.exports = tail;
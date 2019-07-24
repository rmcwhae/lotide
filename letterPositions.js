// Assertion Function
let assertArraysEqual = function(inputArray1, inputArray2, message) {
  if (eqArrays(inputArray1, inputArray2)) {//use eqArrays function to compare arrays
    console.log(`✅✅✅ Assertion Passed`);//log appropriate message
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};


let eqArrays = function(inputArray1, inputArray2) {
  let equivalent = true;
  if (inputArray1.length !== inputArray2.length) {
    equivalent = false;
  } else {
    for (let i = 0; i < inputArray1.length; i++) {
      console.log(`arr1: ${inputArray1[i]}; arr2: ${inputArray2[i]}`);
      if (inputArray1[i] !== inputArray2[i]) equivalent = false;
    }
  }
  return equivalent;
};


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("");//remove spaces from input
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) results[sentence[i]].push(i);//for each letter, add it's index to the results array for that letter's key
    else results[sentence[i]] = [i];
  }
  // console.log(results;)
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
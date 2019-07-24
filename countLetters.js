// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (inputString) {
  const results = {};
  inputString = inputString.split(" ").join("");//remove spaces from input
  for (const letter of inputString) {
    if (results[letter]) results[letter] += 1;//if letter already exists increase count
    else results[letter] = 1; //if letter doesn't alredy exist add it
  }
  return results;
};

console.log(countLetters("hello"));
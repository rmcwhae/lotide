// FUNCTION IMPLEMENTATION

const countLetters = function (inputString) {
  const results = {};
  inputString = inputString.split(" ").join("");//remove spaces from input
  for (const letter of inputString) {
    if (results[letter]) results[letter] += 1;//if letter already exists increase count
    else results[letter] = 1; //if letter doesn't alredy exist add it
  }
  return results;
};

module.exports = countLetters;
const letterPositions = function(sentence) {
  const results = {};
  // sentence = sentence.split(" ").join("");//remove spaces from input
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    console.log(`letter is ${letter}`);
    if (letter !== ' ') {//skip spaces
      if (results[letter]) {
        results[letter].push(i);//for each letter, add its index to the results array for that letter's key
      } else {
        results[letter] = [i];
      }
    }
  }
  // console.log(results;)
  return results;
};

module.exports = letterPositions;
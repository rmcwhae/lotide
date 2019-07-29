let flatten = function(inputArray) {
  let output = [];
  for (let item of inputArray) {
    if (Array.isArray(item)) {
      // console.log(`item: ${item}`);
      for (let inputArrayItem of item) output.push(inputArrayItem);
    } else {
      // console.log(`item: ${item}`);

      output.push(item);
    }
  }
  return output;
};

module.exports = flatten;
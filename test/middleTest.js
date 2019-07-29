const middle = require('../middle');


// const assertArraysEqual = require('../assertArraysEqual');
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(middle([1]), []);
// // console.log(middle([1, 2, 3]));
// // console.log(middle([1]));
// // console.log(middle([1, 2, 3, 4, 5, 6]));
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


const assert = require('chai').assert;

describe("#head", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  

});
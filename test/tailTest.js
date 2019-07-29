const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ['things', 'stuff', 'items'];
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!
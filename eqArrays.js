// Assertion Function
const assertEqual = function(actual, expected, message) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};
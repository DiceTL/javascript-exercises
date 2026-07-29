const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(base, exp) {
  let power = base;
	for (let i = 1; i < exp; i++) power *= base;
  return power;
};

const factorial = function(num) {
	/*
  GET num
  INIT factorial to 1
  IF num is 0, return 1
  LOOP through until num is 1
    FOR each iteration
    Multiply factorial with current num
  */

  if (num === 0) return 1;

  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

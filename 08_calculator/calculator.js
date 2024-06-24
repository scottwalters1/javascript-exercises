const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {

  if (arr.length == 0) {
    return 0;
  }
  let sum = 0;
	return arr.reduce((sum, num) => {
    return sum + num;
  })
};

const multiply = function(arr) {

  if (arr.length == 0) {
    return 0;
  }
  let product = 0;
	return arr.reduce((product, num) => {
    return product * num;
  })
 
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;
	for (let i = 1; i <= num; i++) {
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

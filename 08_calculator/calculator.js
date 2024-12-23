const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prev, current) => prev + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, current) => prev * current);
};

const power = function (a, b) {
  let x = a;
  for (let i = 1; i < b; i++) {
    x *= a;
  }
  return x;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

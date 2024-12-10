const sumAll = function (x1, x2) {
  let sum = 0;
  let max;
  let min;

  if (
    typeof x1 !== "number" ||
    typeof x2 !== "number" ||
    x1 % 1 !== 0 ||
    x2 % 1 !== 0 ||
    x1 < 0 ||
    x2 < 0
  ) {
    return "ERROR";
  }

  if (x1 < x2) {
    (min = x1), (max = x2);
  } else if (x1 > x2) {
    (min = x2), (max = x1);
  }
  //return "ERROR";

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*
Clearly didn't read the instructions carefully: 

function(...total) {
    let sum;

    for( num of total) {
        sum += +num;
    }
    return sum;
};
*/

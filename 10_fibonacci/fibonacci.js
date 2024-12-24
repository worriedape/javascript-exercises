const fibonacci = function (num) {
  if(num<0) return "OOPS"
  let arr = [0, 1];

  while (arr.length <= num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;

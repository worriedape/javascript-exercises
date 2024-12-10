const removeFromArray = (array, ...deletable) => {
  let newArray = [];

  outer: for (let x of array) {
    for (let item of deletable) {
      if (x == item) continue outer;
    }
    newArray.push(x);
  }
  return newArray
};

// Do not edit below this line
module.exports = removeFromArray;

/*
 iterate on ...deletable
    if x from ...deletable is not equal to ...array
    return new array without ...deletable


    iterate from array,
    iterate from ...deletable,
    if any of the items from array is not equal
    to any of the items from ...deletable,
    return it into a new array

    removeFromArray([1,2,3], 2)

    */
